import { Role } from './role.model';

export class UserRole {
  id: number
  userId: number
  roleId: number
  roles: Role[]
}