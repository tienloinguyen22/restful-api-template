import { Request } from 'express';
import _ from 'lodash';
import { IsAuditable } from '../interfaces/is_auditable';
import { getCurrentTimestampInMilliseconds } from './get_current_timestamp_in_milliseconds';

export const addCreationInfo = (req: Request): Partial<IsAuditable> => {
  return {
    createdBy: _.get(req, 'user._id') ? _.get(req, 'user._id') : undefined,
    createdAt: getCurrentTimestampInMilliseconds(),
  };
};
