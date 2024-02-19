import Header from '../Header'
import Order from '../Orders'
import SlideBar from '../SlideBar'
import './index.css'

const Home = () => (
    <div>
        <Header/>
        <div className = "slide-order" >
            <SlideBar/>
            <Order/>
        </div>
    </div>
)

export default Home