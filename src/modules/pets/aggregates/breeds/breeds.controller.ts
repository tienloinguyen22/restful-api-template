import express from 'express';
import { authenticate } from '@app/core';
import { find } from './services';

export const breedsController = express.Router();
breedsController.get('/', authenticate(), find);
