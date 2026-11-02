import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div>
           <Navbar></Navbar>

           <main className="w-11/12 md:w-10/12 mx-auto my-10 h-svh">
            <Outlet></Outlet>
           </main>

           <Footer></Footer>

        </div>
    );
};

export default Layout;