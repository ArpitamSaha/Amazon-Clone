import React from 'react';
import "./ShopSection.css";
const ShopSection = () => {
    return (
        <>
            <div className="hero-section"> </div>

            <div className="shop-section">
                <div className=" box">
                    <div className="box-content">
                        <h2>Up to 70% off | Clearance store</h2>
                        <div className="box-img" style={{ backgroundImage: "url('../../Images/content/pro-1.jpg')" }}></div>
                        <p>see more</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Up to 60% off | Styles for men</h2>
                        <div className="box-img" style={{ backgroundImage: "url('../../Images/content/Box2-Pro1.jpg')" }}></div>
                        <p>see all offers</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Up to 60% off | Styles for women</h2>
                        <div className="box-img" style={{ backgroundImage: "url('../../Images/content/Box2-Pro2.jpg')" }}></div>
                        <p>see all offers</p>
                    </div>
                </div>
                <div className=" box">
                    <div className="box-content">
                        <h2>Up to 70% off | Clearance store</h2>
                        <div className="box-img" style={{ backgroundImage: "url('../../Images/content/pro-1.jpg')" }}></div>
                        <p>see more</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Starting ₹99 | All your home improvement needs</h2>
                        <div className="box-img" style={{ backgroundImage: "url('../../Images/content/Box5.jpg')" }}></div>
                        <p>Explore all</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Appliances for your home | Up to 55% off</h2>
                        <div className="box-img" style={{ backgroundImage: "url('../../Images/content/Box6.jpg')" }}></div>
                        <p>see more</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Automotive essentials | Up to 60% off</h2>
                        <div className="box-img" style={{ backgroundImage: "url('../../Images/content/Box7.jpg')" }}></div>
                        <p>see more</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Revamp your home in style</h2>
                        <div className="box-img" style={{ backgroundImage: "url('../../Images/content/Box8.jpg')" }}></div>
                        <p>Explore all</p>
                    </div>
                </div>

                <div className="box deal-box">

                    <h3 style={{ paddingTop: "10px" }} >Today's Deals <a href="https://www.amazon.in/">See all deals</a> </h3>
                    <div className="deal">

                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/deal1.jpg')" }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Earbuds - Clarity 5 at 1499 launch price...</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/deal2.jpg')" }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Best Styles of Bata, Hush Puppies & M...</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/deal3.jpg')" }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Best Offers on V-Guard Products</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/deal4.jpg')" }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>itel P40 7000mAh Mega Battery, Octa…</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/deal5.jpg')" }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Starting 299 - ASIAN Footwear Collection Co</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/deal6.jpg')" }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Best offers on PC and Electronic accessories from RTS</p>
                        </div>

                    </div>
                </div>

                <div className="box deal-box furniture">

                    <h3 style={{ paddingTop: "10px" }}>Up to 45% off | Furniture that suits your home <a href="https://www.amazon.in/">See all deals</a>
                    </h3>
                    <div className="deal">

                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/furniture1.jpg')" }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/furniture2.jpg')" }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/furniture3.jpg')" }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/furniture4.jpg')" }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/furniture5.jpg')" }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: "url('../../Images/content/furniture6.jpg')" }}></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopSection;