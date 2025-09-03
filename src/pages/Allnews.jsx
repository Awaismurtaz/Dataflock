import React, { useState } from "react";
import WomenImage from "../assets/images/women_image.png";
import CircularProgress from "../component/CircularProgress.jsx";
import HotNewsComments from "../component/HotNewsCard.jsx";
import NewsCard from "../component/NewsCard.jsx";
import NewsComments from "../component/TopNews.jsx";
const Allnews = () => {
  const [viewMode, setViewMode] = useState("list"); 
  
  return (
    <div>
      <div className="main__content__box ">
        <div className="container-fluid px-0">
          <div className="row g-4">
            <div className="col-md-8">
              <div className="row g-4">
                {/* First Card */}
                <div className="col-12">
                  <div className="latest_news_card  shadow-sm">
                    <div className="latest_news_image_box position-relative">
                      <img
                        src={WomenImage}
                        alt="news"
                        className="w-100 h-100 object-fit-cover rounded-4"
                      />
                      <span className="mini_title position-absolute">
                        image von Bloomberg
                      </span>
                    </div>
                  </div>
                  {/* Overlay */}
                  <div className="latest_news_card_overlay ">
                    <h3 className="fs_30 fw-light text-white mb-4">
                      Kemi Badenoch ist neue Chefin der Konservativen
                    </h3>
                    <p className="text-white fw-light mb-4">
                      Ein konservativer Premier nach dem anderen gescheitert,
                      Debakel bei der Wahl im Sommer: Die britischen Tories
                      haben schwere Zeiten hinter sich. Jetzt haben sie die
                      Parteirechte Badenoch zu ihrer neuen Chefin gewählt.
                    </p>
                    <div className="news_detail d-flex align-items-center justify-content-between">
                      <div className="d-flex gap-3 align-items-center small ">
                        <p className="text-white mb-0">
                          <span className="active_news "></span>
                          vor 5 Std
                        </p>
                        <span className="category">Theme 1</span>
                        <span className="category">Theme 2</span>
                      </div>
                      <div className="d-flex align-items-center gap-3 small">
                        <span className="post_time">5 min</span>
                        <CircularProgress progress={50} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* news Card */}
                {[...Array(10)].map((news, index) => (
                  <div className="col-12" key={index}>
                    <NewsCard value={index} viewMode={viewMode}/>
                  </div>
                ))}
              </div>
            </div>
            <div class="col-md-4">
              <div className="news_comments">
                {/* Tabs */}
                <ul className="news-tabs" role="tablist">
                  <li className="news-tab-item" role="presentation">
                    <button
                      className="news-tab-btn active"
                      id="hot-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#hotNews"
                      type="button"
                      role="tab"
                      aria-controls="hotNews"
                      aria-selected="true"
                    >
                      HOT NEWS
                    </button>
                  </li>
                  <li className="news-tab-item" role="presentation">
                    <button
                      className="news-tab-btn"
                      id="all-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#allNews"
                      type="button"
                      role="tab"
                      aria-controls="allNews"
                      aria-selected="false"
                    >
                      ALL NEWS
                    </button>
                  </li>
                </ul>

                {/* Tab Content */}
                <div className="news-tab-content tab-content mt-4" id="newsTabContent">
                  {/* Hot News */}
                  <div
                    className="tab-pane fade show active"
                    id="hotNews"
                    role="tabpanel"
                    aria-labelledby="hot-tab"
                  >
                    {[...Array(10)].map((hotNews, index) => (
                      <div className="mt-4" key={index}>
                        <HotNewsComments />
                      </div>
                    ))}
                  </div>

                  {/* All News */}
                  <div
                    className="tab-pane fade"
                    id="allNews"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    {[...Array(10)].map((hotNews, index) => (
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
      </div>
    </div>
  );
};

export default Allnews;
