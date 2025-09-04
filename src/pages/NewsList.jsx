import React, { useState } from "react";
import HotNewsComments from "../component/HotNewsCard.jsx";
import NewsCard from "../component/NewsCard.jsx";
import LatestNews from "../component/AllNews.jsx";
import TopNews from "../component/TopNews.jsx";
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
                  <TopNews />
                </div>

                {/* news Card */}
                {[...Array(10)].map((news, index) => (
                  <div className="col-12" key={index}>
                    <NewsCard value={index} viewMode={viewMode} />
                  </div>
                ))}
              </div>
            </div>
            <div class="col-md-4 ">
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
                        <LatestNews />
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
