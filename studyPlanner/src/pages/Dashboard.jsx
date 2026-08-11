import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import "./Dashboard.css";
export default function Dashboard(){
    return(
        <>
        <SideBar></SideBar>
        <Outlet></Outlet>
        </>
    )
}