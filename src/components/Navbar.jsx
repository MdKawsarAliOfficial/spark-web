import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* <!-- ========== Nav Section Start ========== --> */}
            <nav id="nav_bar">
                <div className="container">
                    <div className="main">
                        <div className="logo">
                            <Link to="/"><img src="/logo.gif" alt="logo" /></Link>
                        </div>
                        <div className="nav_item nav_link_text">
                            <ul>
                                <li><NavLink className={({ isActive}) => isActive ? "active" : "" } to="/">Home</NavLink></li>
                                <li><NavLink className={({ isActive}) => isActive ? "active" : "" } to="/about">About</NavLink></li>
                                <li><NavLink className={({ isActive}) => isActive ? "active" : "" } to="/blog">Blog</NavLink></li>
                                <li><NavLink className={({ isActive}) => isActive ? "active" : "" } to="/services">Services</NavLink></li>
                                <li><NavLink className={({ isActive}) => isActive ? "active" : "" } to="/portfolio">Portfolio</NavLink></li>
                            </ul>
                        </div>
                        <div className="menu_button nav_link_text">
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- ========== Nav Section End ========== --> */}
        </>
    );
};

export default Navbar;