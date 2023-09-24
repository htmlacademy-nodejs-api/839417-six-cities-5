export enum UserRank {
  Regular = 'regular',
  Pro = 'pro'
}

export type User = {
  name: string;
  email: string;
  avatarPath?: string;
  password: string;
  rank: UserRank;
}
