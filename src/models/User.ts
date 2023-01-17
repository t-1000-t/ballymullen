import { Agency, Contact, UserRole } from '.'

export interface User extends Record<string, any> {
  id: number
  agency: Agency | null
  contact: Contact
  roles: UserRole[]
  status: string
  createdAt: string
  updatedAt: string
  mainRole: string
  imageId?: number | null
  label?: string
}
