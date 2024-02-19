import { IoSettingsOutline } from "react-icons/io5"
import { LiaFileImportSolid } from "react-icons/lia"
import { AiOutlineSend } from "react-icons/ai"
import { FiPrinter } from "react-icons/fi"
import { TbRefresh } from "react-icons/tb"
import './index.css'
import Tables from "../Tables"

const Order = () => (
    <div className = "order-bg-container" >
        <div className = "order-x-container" >
            <div className = "order-x" >
                <p className = "order-text" >orders</p>
                <p>X</p>
            </div>
            <div>
            <IoSettingsOutline/>
            </div>
        </div>
        <div className = "pending" >
            <p className = "pending-p" >Pending</p>
            <p className = "pending-p" >Accepted</p>
            <p className = "pending-p" >AWB created</p>
            <p className = "pending-p" >Ready to ship</p>
            <p className = "pending-p" >Shipped</p>
            <p className = "pending-p" >Completed</p>
            <p className = "pending-p" >Cancelled</p>
        </div>
        <div className = "bottom-container" >
        <div className = "import-container" >
            <div className = "import-item" >
                <div className = "import-item-list" >
                    <LiaFileImportSolid/>
                    <p className = "import-t" >Import Orders</p>
                </div>
                <div className = "import-item-list" >
                    <AiOutlineSend/>
                    <p className = "import-t" >Accept</p>
                </div>
                <div className = "import-item-list" >
                    <FiPrinter/>
                    <p className = "import-t" >Print</p>
                </div>
            </div>
            <div>
            <div className = "import-item-list1" >
                    <TbRefresh className = "refresh" />
                    <p className = "import-t1" >Refresh</p>
                </div>
            </div>
        </div>
        <div>
            <Tables/>
        </div>
        </div>
    </div>
)

export default Order