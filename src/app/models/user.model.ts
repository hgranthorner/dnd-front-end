import { UserRole } from './user-role.model';

export class User {
  id: number
  username: string
  password: string
  email: string
  userRoles: UserRole[]
  token?: string
}