export interface TokenDecoded {
    Id: string
    Username: string
    Role: string
    exp: Date
  }

  export interface UserToken {
    username: string
    token: string
  }