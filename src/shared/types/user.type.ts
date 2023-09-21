enum UserRank {
  Regular = 'Regular',
  Pro = 'Pro'
}

export type User = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  rank: UserRank;
}
