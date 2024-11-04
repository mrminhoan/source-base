/* eslint-disable react/prop-types */
import {isValidElement} from "react";
import {Navigate} from "react-router-dom";

const GuarPublicRoute = ({component: Component, ...rest}) => {
    const isIdentify = true;
    return !isIdentify ? isValidElement(Component) ? Component : <Component /> : <Navigate to={"/"} />;
};
export default GuarPublicRoute;
