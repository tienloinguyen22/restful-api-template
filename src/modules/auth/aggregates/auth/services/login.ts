import { Response, Request } from 'express';
import {
  validatePayload,
  regex,
  Genders,
  createObjectId,
  LoginTypes,
  getCurrentTimestampInMilliseconds,
} from '@app/core';
import * as yup from 'yup';
import admin from 'firebase-admin';
import { StatusCodes } from 'http-status-codes';
import { LoginPayload } from '../interfaces/LoginPayload';
import { usersRepository } from '../../users/users.repository';
import { User } from '../../users/interfaces/User';

export const login = async (req: Request, res: Response, next: Function): Promise<void> => {
  try {
    const payload: LoginPayload = req.body;

    // 1. validate
    await validatePayload(
      {
        idToken: yup.string().required('ID Token is required'),
        fullName: yup
          .string()
          .required('Full name is required')
          .max(50, 'Full name is too long (<= 50 characters)'),
        email: yup
          .string()
          .nullable(true)
          .matches(regex.email, 'Invalid email address'),
        phoneNo: yup
          .string()
          .nullable(true)
          .matches(regex.phoneNumber, 'Invalid phone number'),
        avatarUrl: yup.string().nullable(true),
        dob: yup
          .string()
          .nullable(true)
          .matches(regex.isoDate, 'Invalid dob'),
        address: yup.string().nullable(true),
        gender: yup
          .string()
          .nullable(true)
          .oneOf([Genders.FEMALE, Genders.FEMALE, Genders.OTHER], 'Invalid gender'),
      },
      payload,
    );

    // 2. If user exist => return
    const verifyIdToken = await admin.auth().verifyIdToken(payload.idToken);
    const existedUser = await usersRepository.findOne({ firebaseId: verifyIdToken.uid });
    if (existedUser) {
      res.status(StatusCodes.OK).json(existedUser);
    }

    // 3. Create user if not exist
    const firebaseInfo = await admin.auth().getUser(verifyIdToken.uid);
    const providerInfo = firebaseInfo.providerData[0];

    let loginType = LoginTypes.APPLE;
    if (providerInfo.providerId === 'facebook.com') {
      loginType = LoginTypes.FACEBOOK;
    } else if (providerInfo.providerId === 'google.com') {
      loginType = LoginTypes.GOOGLE;
    }

    const userInfo: Partial<User> = {
      _id: createObjectId(),
      fullName: payload.fullName,
      email: payload.email,
      phoneNo: payload.phoneNo,
      avatarUrl: payload.avatarUrl,
      dob: payload.dob,
      address: payload.address,
      gender: payload.gender,
      firebaseId: verifyIdToken.uid,
      loginType,
      createdAt: getCurrentTimestampInMilliseconds(),
    };
    const newUser = await usersRepository.create(userInfo);

    res.status(StatusCodes.OK).json(newUser);
  } catch (error) {
    next(error);
  }
};
