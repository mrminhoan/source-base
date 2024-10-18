import { proxy, useSnapshot, subscribe, ref } from 'valtio';
import { devtools, proxySet, subscribeKey, watch } from 'valtio/utils';
import { derive } from 'derive-valtio';

interface IFeedbackStore {
  feedbacks: IFeedbackStore[];
  count: number;
}
const userStore = proxy({
  user: {
    name: 'Juuso',
    birthDay: 1990,
    get age() {
      return new Date().getFullYear() - this.birthDay;
    },
    set age(newAge: number) {
      // Tính toán lại birthDay dựa trên tuổi mới
      this.birthDay = new Date().getFullYear() - newAge;
    },
  },
});
const userDerivedStore = derive({
  age: (get) => new Date().getFullYear() - get(userStore).user.birthDay,
});

const sessionStore = proxy({ expired: false });
const settingsStore = proxy({ theme: 'light' });
export const feedbackStore = proxy<IFeedbackStore>({
  feedbacks: [],
  count: 0,
});
const projectStore = proxy({
  // selectedProjects: proxySet(new Set()),
  selectedProjects: proxySet(),
});

// watch((get) => {
//   const expired = get(sessionStore).expired;
//   const name = get(userStore).user.name;
//   const theme = get(settingsStore).theme;
//   ++feedbackStore.count;
//   console.log(
//     `${name}'s session is ${expired ? 'expired' : 'valid'}, theme is ${theme}, feebackCounts: ${feedbackStore.count}`,
//   );
// });

subscribeKey(sessionStore, 'expired', (v) => ++feedbackStore.count);

export const feedbackActions = {
  updateUserBirthday(birthDay) {
    userStore.user.birthDay = birthDay;
  },
};

export const useFeedbackStore = () => {
  const feedbackSnapshot = useSnapshot(feedbackStore);
  const userSnapshot = useSnapshot(userStore);
  const userDerivedSnapshot = useSnapshot(userDerivedStore);
  const projectSnapshot = useSnapshot(projectStore);
  return {
    feedbackStore,
    sessionStore,
    userStore,
    userDerivedStore,
    feedbackSnapshot,
    userSnapshot,
    userDerivedSnapshot,
    feedbackActions,
    projectStore,
    projectSnapshot,
  };
};

devtools(userStore, { name: 'User Store', enabled: true });
