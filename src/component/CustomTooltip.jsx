// CustomTooltip.jsx
import React from "react";
import UserImage from "../assets/images/tooltip_imag.png"
const CustomTooltip = ({ children }) => {
    return (
        <span className="tooltip_wrapper">
            <a href="#" className="custom_anchor">{children}</a>

            <div className="custom_tooltip_box">
                <div className="tooltip_content d-flex">
                    <img
                        src={UserImage}
                        className="tooltip_img"
                        alt="Rishi Sunak"
                    />
                    <div className="tooltip_text_box ms-3">
                        <p className="tooltip_title mb-1">Rishi Sunak</p>
                        <p className="tooltip_description mb-2">
                            Rishi Sunak ist ein britischer Politiker der Conservative Party. Er war von Oktober 2022
                            bis Juli 2024 Premierminister des Vereinigten Königreichs und von Oktober 2022 bis
                            November 2024 Vorsitzender seiner Partei.
                        </p>
                        <div className="tooltip_buttons d-flex gap-2">
                            <button className=" custom_btn_success">NEW PROMPT</button>
                            <button className=" custom_btn_primary">ENHANCE</button>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
};

export default CustomTooltip;
