import { UserRole } from './user-role.model';

export class Role {
  id: number
  name: string
  userRoles: UserRole[]
}