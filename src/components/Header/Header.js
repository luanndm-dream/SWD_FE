import "./Header.css";
import busLogo from "./../../assets/logos/bus.png"
const Header = () => {
    return ( 
        <div className="header_container">
            <div className="left_item">
                <div className="logo_container">
                    <img style={{height: "37.15px", width: "37.15px"}} src={busLogo} alt="logo"/>
                </div>
                <h1>BusDelivery</h1>
            </div>
            <div className="right_item">
                <div className="login_btn">
                    <a>Đăng nhập</a>
                    {/* <button>Đăng nhập</button> */}
                </div>
                <div>
                </div>
                <div className="location_btn">
                    <a>Location</a>
                    {/* <button>Location</button> */}
                </div>
            </div>
        </div>


     );
}
 
export default Header;