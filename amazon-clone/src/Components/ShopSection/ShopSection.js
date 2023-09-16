import React from 'react';
import pro1 from '../../Images/content/pro-1.jpg';
import Box2pro1 from '../../Images/content/Box2-Pro1.jpg';
import Box2pro2 from '../../Images/content/Box2-Pro2.jpg';
import Box5 from '../../Images/content/Box5.jpg';
import Box6 from '../../Images/content/Box6.jpg';
import Box7 from '../../Images/content/Box7.jpg';
import Box8 from '../../Images/content/Box8.jpg';
import Deal1 from '../../Images/content/deal1.jpg';
import Deal2 from '../../Images/content/deal2.jpg';
import Deal3 from '../../Images/content/deal3.jpg';
import Deal4 from '../../Images/content/deal4.jpg';
import Deal5 from '../../Images/content/deal5.jpg';
import Deal6 from '../../Images/content/deal6.jpg';

import Furniture1 from '../../Images/content/furniture1.jpg';
import Furniture2 from '../../Images/content/furniture2.jpg';
import Furniture3 from '../../Images/content/furniture3.jpg';
import Furniture4 from '../../Images/content/furniture4.jpg';
import Furniture5 from '../../Images/content/furniture5.jpg';
import Furniture6 from '../../Images/content/furniture6.jpg';

import "./ShopSection.css";
const ShopSection = () => {
    return (
        <>
            <div className="hero-section"> </div>

            <div className="shop-section">
                <div className="box">
                    <div className="box-content">
                        <h2>Up to 70% off | Clearance store</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${pro1})` }}></div>
                        <p>see more</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Up to 60% off | Styles for men</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${Box2pro1})` }}></div>
                        <p>see all offers</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Up to 60% off | Styles for women</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${Box2pro2})` }}></div>
                        <p>see all offers</p>
                    </div>
                </div>
                <div className=" box">
                    <div className="box-content">
                        <h2>Up to 70% off | Clearance store</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${pro1})` }}></div>
                        <p>see more</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Starting ₹99 | All your home improvement needs</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${Box5})` }}></div>
                        <p>Explore all</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Appliances for your home | Up to 55% off</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${Box6})` }}></div>
                        <p>see more</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Automotive essentials | Up to 60% off</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${Box7})` }}></div>
                        <p>see more</p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Revamp your home in style</h2>
                        <div className="box-img" style={{ backgroundImage: `url(${Box8})` }}></div>
                        <p>Explore all</p>
                    </div>
                </div>

                <div className="box deal-box">

                    <h3 style={{ paddingTop: "10px" }} >Today's Deals <a href="https://www.amazon.in/">See all deals</a> </h3>
                    <div className="deal">

                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Deal1})` }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Earbuds - Clarity 5 at 1499 launch price...</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Deal2})` }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Best Styles of Bata, Hush Puppies & M...</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Deal3})` }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Best Offers on V-Guard Products</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Deal4})` }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>itel P40 7000mAh Mega Battery, Octa…</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Deal5})` }}></div>
                            <p className="pro-desp"><span>Upto 78% off </span> &nbsp; Deals of the day</p>
                            <p>Starting 299 - ASIAN Footwear Collection Co</p>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Deal6})` }}></div>
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
                            <div className="deal-img" style={{ backgroundImage: `url(${Furniture1})` }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Furniture2})` }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Furniture3})` }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Furniture4})` }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Furniture5})` }}></div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-img" style={{ backgroundImage: `url(${Furniture6})` }}></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopSection;