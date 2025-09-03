import React, { useState } from "react";
import CircularProgress from "./CircularProgress";
import Source1 from "../assets/images/H-icon.svg";
import Source2 from "../assets/images/ch-icon.svg";
import Source3 from "../assets/images/ft-icon.svg";
import Source4 from "../assets/images/rocket.svg";

const CustomizeArticlePanel = () => {
    // States for each group
    const [articleDetail, setArticleDetail] = useState("Original");
    const [writingStyle, setWritingStyle] = useState("Original");
    const [inclusions, setInclusions] = useState(["Interviews"]);
    const [perspective, setPerspective] = useState("Unbiased");

    const toggleInclusion = (item) => {
        setInclusions((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    return (
        <div className="custom_panel_box p-3 rounded-4">
            {/* Top Panel */}
            <div className="custom_top_section mb-4 bg_glassEffect">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="small">07.07.2025 - 07:53</span>
                    <div className="d-flex align-items-center gap-2">
                        <span className="custom-readtime">5 min</span>
                        <CircularProgress progress={40}/>
                    </div>
                </div>

                <div className="news_detail d-flex justify-content-between align-items-center mb-4">
                    <span className="small">Tages</span>
                    <div className="d-flex align-items-center gap-2">
                        <span className="category small">Theme 1</span>
                        <span className="category small">Theme 2</span>
                    </div>
                </div>

                <div className="news_detail d-flex justify-content-between align-items-center mb-2">
                    <span className="small">Sources</span>
                    <div className="news_sourace_block d-flex align-items-center gap-2">
                        <div className="source-avatars d-flex">
                            <img src={Source1} alt="src1" className="source-icon" />
                            <img src={Source2} alt="src2" className="source-icon" />
                            <img src={Source3} alt="src3" className="source-icon" />
                            <img src={Source4} alt="src4" className="source-icon" />
                        </div>
                        <span className="text-light small">+32</span>
                    </div>
                </div>
            </div>

            {/* Customize Section */}
            <div className="custom-customize-box bg_glassEffect">
                <h6 className="custom-section-title fw-semibold py-2">CUSTOMIZE THIS ARTICLE</h6>

                {/* Article Details */}
                <div className="custom-group">
                    <label className="custom-label">Article Details</label>
                    <div className="custom_tab d-flex gap-2 flex-wrap justify-content-between">
                        {["Short", "Original", "Detailed"].map((opt) => (
                            <span
                                key={opt}
                                className={`custom-toggle ${articleDetail === opt ? "activetab" : ""}`}
                                onClick={() => setArticleDetail(opt)}
                            >
                                {opt}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Writing Style */}
                <div className="custom-group pt-2">
                    <label className="custom-label">Writing Style</label>
                    <div className="custom_tab d-flex gap-2 flex-wrap justify-content-between">
                        {["Analytical", "Original", "Narrative"].map((opt) => (
                            <span
                                key={opt}
                                className={`custom-toggle ${writingStyle === opt ? "activetab" : ""}`}
                                onClick={() => setWritingStyle(opt)}
                            >
                                {opt}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Additional Inclusion */}
                <div className="custom-group pt-2">
                    <label className="custom-label">Additional Inclusion</label>
                    <div className="self_togle_wrap row g-2">
                        {["Interviews", "Refferences", "Narratives"].map((opt) => (
                            <div className="col-md-12 col-4" key={opt}>
                            <span
                                key={opt}
                                className={`custom-toggle ${inclusions === opt ? "activetab" : ""}`}
                                onClick={() => setInclusions(opt)}
                            >
                                {opt}
                            </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View Perspective */}
                <div className="custom-group pt-2">
                    <label className="custom-label pb-3">View Perspective</label>
                    <div className="self_togle_wrap row g-2">
                        {["Unbiased", "US", "China", "EU", "UAE", "Russia"].map((opt) => (
                            <div className="col-md-6 col-4" key={opt}>
                                <span
                                    className={`custom-toggle w-100 text-center ${perspective === opt ? "activetab" : ""}`}
                                    onClick={() => setPerspective(opt)}
                                >
                                    {opt}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomizeArticlePanel;
