import { Outlet } from "react-router-dom";
 import NavBar from "../Component/NavBar";
 import Footer from "../Component/Footer";
   
const AppLayout = () => {
  return (
    <div className="max-w-screen-3xl mx-auto flex justify-center flex-col font-lato  dark:bg-dark-background">
     
      <NavBar />
      <div className="">{<Outlet />}</div>
      <Footer companyName="Nexgen-Eng" year={2024} />
    </div>
  );
};
export default AppLayout;
