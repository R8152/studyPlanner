import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
export default function Dashboard(){
    return(
        <>
        <SideBar></SideBar>
        <Outlet></Outlet>
        </>
    )
}