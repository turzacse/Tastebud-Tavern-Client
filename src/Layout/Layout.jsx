import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;