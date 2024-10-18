import { Button } from 'antd';
import { useFeedbackStore } from '../../../store';
function FeedbackList() {
  const {
    sessionStore,
    feedbackStore,
    userStore,
    feedbackSnapshot,
    userSnapshot,
    userDerivedStore,
    feedbackActions,
  } = useFeedbackStore();
  const toggleExpire = () => {
    sessionStore.expired = !sessionStore.expired;
  };
  const increAge = () => {
    feedbackActions.updateUserBirthday(-- userStore.user.birthDay);
  };
  return (
    <div>
      <h1>Feedback List Page</h1>
      <Button onClick={toggleExpire}>Set Expired</Button>
      <p>Count Feedback: {feedbackSnapshot.count}</p>

      <div className="mt-10">
        <h1 className="mb-5">User Information</h1>
        <p>Name: {userSnapshot.user.name}</p>
        <p>Age: {userDerivedStore.age}</p>

        <Button onClick={increAge}>Incre Age</Button>
      </div>
    </div>
  );
}

export default FeedbackList;
