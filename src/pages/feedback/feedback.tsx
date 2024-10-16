import { PATH } from '@constants';
import { NavLink, Outlet } from 'react-router-dom';

function Feedback() {
  return (
    <div>
      Feedback Page
      <button>
        <NavLink to={PATH.FEEDBACK.DETAIL} state={{ read: true }}>
          Feedback detail
        </NavLink>
      </button>
      <button>
        <NavLink to={PATH.FEEDBACK.LIST}>Feedback List</NavLink>
      </button>
      <Outlet />
    </div>
  );
}

export default Feedback;
