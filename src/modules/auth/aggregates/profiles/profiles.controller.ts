import express from 'express';
import { authenticate } from '@app/core';
import { update } from './services';

export const profilesController = express.Router();
profilesController.patch('/', authenticate(), update);
