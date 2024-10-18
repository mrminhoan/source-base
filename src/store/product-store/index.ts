import { IUserModel } from '@models';
import { create } from 'zustand';

interface IUserStore {
  user: IUserModel;
}
interface Action {
  updateFirstName: (firstName: string) => void;
  updateAge: (age: number) => void;
}
const init: IUserStore = {
  user: {
    id: 1,
    firstName: 'Van',
    lastName: 'Hoang',
    age: 24,
  },
};

export const useUserStore = create<IUserStore & Action>((set) => (
  {
  user: init.user, // Khởi tạo user từ init
  updateFirstName: (firstName) => {
    set((state) => ({
      user: {
        ...state.user,
        firstName,
      },
    }));
  },
  updateAge: (age) => {
    set((state) => ({
      user: {
        ...state.user,
        age,
      },
    }));
  },
}
));
