export interface Profile {
  login?: string
  avatarUrl?: string
  name?: string
  status?: {
    id: number
    message: string
  }
}
