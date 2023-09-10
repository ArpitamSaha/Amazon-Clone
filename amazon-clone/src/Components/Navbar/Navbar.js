import React from 'react';
import flag from '../../Images/Indian Flag.png';
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
            <div className="navbar" id="home">
                <div className="nav-logo border">
                    <div className="logo"></div>
                </div>

                <div className="nav-address border">
                    <p className="add-first">Hello</p>
                    <div className="add-icon">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="add-sec">Select Your Address</p>
                    </div>
                </div>

                <div className="nav-search">
                    <select className="search-select">
                        <option>All</option>
                    </select>
                    <input placeholder="Search Amazon.in" className="search-input" />
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="nav-location border">
                    <img src={flag} alt="indian flag" />
                    <p><span>EN</span></p>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <div className="nav-signin border">
                    <p><span>Hello,sign in</span></p>
                    <p className="nav-sec">Account & Lists
                        <i className="fa-solid fa-caret-down"></i>
                    </p>
                </div>

                <div className="nav-return border">
                    <p><span>Returns</span></p>
                    <p className="nav-sec">& orders</p>
                </div>

                <div className="nav-cart border">
                    <i className="fa-solid fa-cart-shopping"></i>
                    cart
                </div>
            </div>

            <div className="panel">
                <div className="panel-all">
                    <i className="fa-solid fa-bars"></i>
                    All
                </div>
                <div className="panel-ops">
                    <p>Amazon miniTV</p>
                    <p>Sell</p>
                    <p>Best Sellers</p>
                    <p>Today's Deals</p>
                    <p>Mobiles</p>
                    <p>New Releases</p>
                    <p>Customer Service</p>
                    <p>Prime
                        <i className="fa-solid fa-caret-down"></i>
                    </p>
                    <p>Electronics</p>
                    <p>Home & Kitchen</p>
                    <p>Fashion</p>
                </div>
                <div className="panel-deals">
                    New Launches from Mobile, Electronics & more
                </div>
            </div>
        </header>
    );
};

export default Navbar;