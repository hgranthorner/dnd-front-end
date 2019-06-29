import { UserRole } from './user-role.model';

export class User {
  id: string
  username: string
  password: string
  email: string
  userRoles: UserRole[]
  token?: string
}