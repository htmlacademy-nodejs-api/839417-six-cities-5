export enum UserRank {
  regular = 'regular',
  pro = 'pro'
}

export type User = {
  name: string;
  email: string;
  avatarPath?: string;
  password: string;
  rank: UserRank;
}
