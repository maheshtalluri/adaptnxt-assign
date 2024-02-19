import { SiShopify } from "react-icons/si"
import { RxDropdownMenu } from "react-icons/rx"
import { IoMoonOutline } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa"
import { MdGTranslate } from "react-icons/md"
import './index.css'

const Header = () => (
    <nav className = "nav-bg-container" >
        <div>
            <SiShopify className = "shopify" />
            <RxDropdownMenu className = "shopify1" />
        </div>
        <div>
            <IoMoonOutline className = "shopify2" />
            <FaRegBell className = "shopify2" />
            <MdGTranslate className = "shopify2" />
            <img src = "" alt = "avatar" />
        </div>
    </nav>
)

export default Header

