import React from "react";
import Source1 from "../assets/images/H-icon.svg";
import Source2 from "../assets/images/ch-icon.svg";
import Source3 from "../assets/images/ft-icon.svg";
import Source4 from "../assets/images/rocket.svg";
import ArrowUp from "../assets/images/arrow_up.svg";
import Facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";






const HotNewsComments = () => {
    return (
        <div className="news_comment_card p-3 rounded shadow-sm">
            <h6 className=" fw-semibold comment_title">Gold Prices Surge </h6>
            <p className="text-white fw-light comment_description">
                Gold prices hit a new high amid global economic uncertainty
                Gold prices hit a new high amid global economic uncertainty
                Gold prices hit a new high amid global economic uncertainty

            </p>

            {/* Highlight Area */}
            <div className="hot_news_detail d-flex justify-content-between align-items-center mt-3  ">

                {/* Left - News Sources */}
                <div className="news_sourace_block d-flex align-items-center gap-2">
                    <div className="source-avatars d-flex">
                        <img src={Source1} alt="src1" className="source-icon" />
                        <img src={Source2} alt="src2" className="source-icon" />
                        <img src={Source3} alt="src3" className="source-icon" />
                        <img src={Source4} alt="src4" className="source-icon" />
                    </div>
                    <span className="text-light small">+32</span>
                </div>

                {/* Middle - Social Media */}
                <div className="news_socialMedia_block d-flex align-items-center gap-2">
                    <div>
                        <img src={instagram} alt="" className="social-icon"/>
                        <img src={Twitter} alt="" className="social-icon" />
                        <img src={Facebook} alt="" className="social-icon" />

                    </div>
                    <span className="text-light small">43K</span>
                </div>

                {/* Right - Percentage Growth */}
                <div className="d-flex align-items-center gap-2 px-2 py-1 rounded growth-box">
                    <span className="text-light small">45%</span>
                    <span>
                        <img src={ArrowUp} alt="" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HotNewsComments;
