import { AiOutlineDashboard } from "react-icons/ai"
import { IoPricetagOutline } from "react-icons/io5"
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md"
import { IoShareSocialOutline } from "react-icons/io5"
import './index.css'

const SlideBar = () => (
    <div className = "slide-bar-bg" >
        <div className = "dash-board" >
            <AiOutlineDashboard className = "dash-icon" />
            <p className = "text" >Dashboard</p>
        </div>

        <div className = "dash-board" >
            <IoPricetagOutline className = "dash-icon" />
            <p className = "text" >Inventory</p>
        </div>

        <div className = "dash-board1" >
            <FaShoppingCart className = "dash-icon1" />
            <p className = "text" >Orders</p>
        </div>

        <div className = "dash-board" >
            <MdOutlineLocalShipping className = "dash-icon" />
            <p className = "text" >Shipping</p>
        </div>

        <div className = "dash-board" >
            <IoShareSocialOutline className = "dash-icon" />
            <p className = "text" >Channel</p>
        </div>
    </div>
)

export default SlideBar