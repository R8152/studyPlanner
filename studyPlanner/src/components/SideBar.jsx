import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBar.css";
export default function SideBar(){
    return (
        <aside>
            <div>
                <FontAwesomeIcon icon="fa-solid fa-book-open" />
                <div>
                    <label>Silk Study</label>
                    <span>Manager</span>
                </div>
            </div>
            <div>
                <Link to={"/home"}><FontAwesomeIcon icon="fa-solid fa-house" /> Home</Link>
                <Link to={"/studies"}><FontAwesomeIcon icon="fa-solid fa-book" /> Studies</Link>
                <Link to={"/notifications"}><FontAwesomeIcon icon="fa-solid fa-bell" /> Notifications</Link>
            </div>
            <div>
                <img src="" alt="" />
                <div>
                    <label htmlFor="">Raul Teles</label>
                    <span>Pro Student</span>
                </div>
            </div>
        </aside>
    )
}