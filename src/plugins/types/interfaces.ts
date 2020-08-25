export interface User {
  id?: number | null
  nome?: string
  email?: string | null
  headers?: { headers: { authorization: string } }
  isAdmin?: boolean | null
  contratoIdFk?: number
  contratoId?: number | null
  username?: string
  eventoIdFk?: number
  eventoId?: number
}
