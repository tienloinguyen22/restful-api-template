import * as mongoose from 'mongoose';
import { addAuditableSchema, MongoRepository } from '@app/core';
import { Role } from './interfaces';

const RoleSchema = new mongoose.Schema(
  addAuditableSchema({
    name: String,
    description: String,
    permissions: [String],
    isDefault: Boolean,
    isActive: {
      type: Boolean,
      default: true,
    },
  }),
);
RoleSchema.index({ name: 'text' });

const RoleModel = mongoose.model('Role', RoleSchema);

export const rolesRepository = new MongoRepository<Role>(RoleModel, []);
