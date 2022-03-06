import { atom } from 'recoil';


export const avatarImageUrl = atom<string>({
  key: 'avatarImageUrl',
  default: '',
});
