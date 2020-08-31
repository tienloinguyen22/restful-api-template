import { IsAuditable } from '@app/core';

export interface Role extends IsAuditable {
  _id: string;
  name: string;
  description: string;
  permissions: string[];
  isActive: boolean;
}
