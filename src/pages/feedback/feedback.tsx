import {PATH} from "@constants";
import Button from "antd/es/button/button";
import {NavLink, Outlet} from "react-router-dom";

function Feedback() {
    return (
        <div>
            Feedback Page
            <Button>
                <NavLink to={PATH.FEEDBACK.DETAIL} state={{read: true}}>
                    Feedback detail
                </NavLink>
            </Button>
            <Button>
                <NavLink to={PATH.FEEDBACK.LIST}>Feedback List</NavLink>
            </Button>
            <Outlet />
        </div>
    );
}

export default Feedback;
