import React,{ useState } from "react";
import NewsCard from "../component/NewsCard.jsx";
import NewsComments from "../component/TopNews.jsx";
import { FaThLarge, FaList } from "react-icons/fa"; // FontAwesome icons
import { Link } from "react-router-dom";

const MatchingNews = () => {
    const [viewMode, setViewMode] = useState("list"); 

    return (
        <div>
            <div className="main__content__box">
                <div className="container-fluid px-0">
                    <div className="row g-4">
                        {/* Left Side Content */}
                        <div className="col-md-8">
                            <div className="question_wrap">
                                <h5>Wie entwickelt sich der Klimawandel weltweit?</h5>
                                <p>
                                    Der <Link to="#">Klimawandel</Link> schreitet weltweit weiter voran: Laut dem{" "}
                                    <Link to="#">IPCC</Link> war 2024 eines der wärmsten Jahre seit Beginn der
                                    Aufzeichnungen. Besonders betroffen sind Regionen wie die{" "}
                                    <strong>Arktis</strong>, der globale Süden und Teile von Europa, wo extreme{" "}
                                    <strong>Hitzewellen</strong>, <strong>Dürreperioden</strong> und{" "}
                                    <strong>Unwetter</strong> zunehmen. Der Anstieg von{" "}
                                    <Link to="#">Treibhausgasen</Link> wie <Link to="#">CO₂</Link> und{" "}
                                    <Link to="#">Methan</Link> bleibt hoch, trotz internationaler Abkommen wie dem
                                    Pariser Klimaabkommen. Wissenschaftler fordern dringend{" "}
                                    <Link to="#">Dekarbonisierung</Link>, den Ausbau erneuerbarer Energien und eine
                                    globale Anpassungsstrategie.
                                </p>
                            </div>
                         
                            <div className="matching_heading_box d-flex align-items-center justify-content-between my-4">
                                <h4 className="title text-white fw-bold mb-0">Matching News</h4>
                                <div className="view-toggle d-flex gap-3">
                                    <button
                                        className={`toggle_btn ${viewMode === "list" ? "toggle-active" : ""
                                            }`}
                                        onClick={() => setViewMode("list")}
                                    >
                                        <FaList />
                                    </button>
                                    <button
                                        className={`toggle_btn ${viewMode === "grid" ? "toggle-active" : ""
                                            }`}
                                        onClick={() => setViewMode("grid")}
                                    >
                                        <FaThLarge />
                                    </button>
                                </div>
                            </div>
                                {/* News Cards */}
                                <div className="row g-4 ">
                                    {[...Array(10)].map((_, index) => (
                                        <div
                                            key={index}
                                            className={viewMode === "list" ? "col-12" : "col-md-6"}
                                        >
                                            <NewsCard value={index} viewMode={viewMode}/>
                                        </div>
                                    ))}
                                </div>
                        </div>

                        {/* Right Side Comments */}
                        <div className="col-md-4">
                            <div className="news_comments">
                                <div className="heading_box">
                                    <h5 className="text-uppercase fw-bold text-white text-center pt-2 mb-0">
                                        Matching Branches
                                    </h5>
                                </div>
                                {[...Array(10)].map((_, index) => (
                                    <div className="mt-4" key={index}>
                                        <NewsComments />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchingNews;
