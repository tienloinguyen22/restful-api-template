import * as yup from 'yup';
import { Response, Request } from 'express';
import { validatePayload, regex, Genders, addModificationInfo } from '@app/core';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';
import { User } from '../../users/interfaces/User';
import { usersRepository } from '../../users/users.repository';

export const update = async (req: Request, res: Response, next: Function): Promise<void> => {
  try {
    const payload: Partial<User> = req.body;

    // 1. validate
    await validatePayload(
      {
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

    // 2. update user
    const newUserInfo = await usersRepository.update({
      _id: _.get(req, 'user._id'),
      ...payload,
      ...addModificationInfo(req),
    });

    res.status(StatusCodes.OK).json(newUserInfo);
  } catch (error) {
    next(error);
  }
};
