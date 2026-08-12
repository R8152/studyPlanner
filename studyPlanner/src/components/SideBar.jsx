import {BookOpenTextIcon, HouseIcon, BookBookmarkIcon, BellIcon} from "@phosphor-icons/react";
import "./SideBar.css";
import {Link} from 'react-router-dom';
export default function SideBar(){
    return (
        <aside>
            <div>
                <BookOpenTextIcon size={32} color="#094cb2" />
                <div>
                    <label>Silk Study</label>
                    <span>Manager</span>
                </div>
            </div>
            <div>
                <Link to={"/home"}><HouseIcon size={32} color="#094cb2" /> Home</Link>
                <Link to={"/studies"}><BookBookmarkIcon size={32} color="#094cb2" /> Studies</Link>
                <Link to={"/notifications"}><BellIcon size={32} color="#094cb2" /> Notifications</Link>
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