import {Sidebar} from "@components";
import {ReactNode} from "react";

interface ILayoutProps {
    children: ReactNode;
}
function MainLayout(props: ILayoutProps) {
    const {children} = props;
    return (
        <>
            <div style={{display: "flex"}}>
                <Sidebar />
                <div style={{marginLeft: "3rem"}}>
                    <h1>Menu here</h1>
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainLayout;
