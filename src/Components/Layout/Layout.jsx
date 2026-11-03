import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div>
           <Navbar></Navbar>

           <div className="bg-gray-50">
            <main className="w-11/12 md:w-10/12 mx-auto py-10  ">
            <Outlet></Outlet>
           </main>
           </div>

           <Footer></Footer>

        </div>
    );
};

export default Layout;