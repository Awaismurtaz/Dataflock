import React from 'react'
import CircularProgress from './CircularProgress'
import WomenImage from "../assets/images/women_image.png";

const TopNews = () => {
  return (
    <div>
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
  )
}

export default TopNews
