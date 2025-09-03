import React from 'react';
import searchIcon from '../assets/images/search.svg';
import magicStarIcon from '../assets/images/magic_star.svg';
import aiAssistantIcon from '../assets/images/ai-assistant.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import rightArrow from '../assets/images/right_arrow.svg';


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1); // go back to the previous page
  };
  return (
    <div className="header-container ">
      <div className="row">
        <div className="col-md-8">
          <div className='d-flex gap-2 align-items-center  w-100'>
            {location.pathname === "/matching-news" && (
              <div className="serach_icon" onClick={handleBack}>
                <img src={rightArrow} alt="Back" className="icon back-icon" />
              </div>
            )}
            <div className="serach_icon">
              <img src={searchIcon} alt="Search" className="icon search-icon" />
            </div>
            <div className="search-bar">
              <img src={magicStarIcon} alt="Magic Star" className="icon magic-star" />
              <input
                type="text"
                placeholder="Frag über aktuelle News, Themen, Orte oder Personen"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <button className="ai-assistant-btn">
            <img src={aiAssistantIcon} alt="AI Assistant" />
            <span>AI Assistant</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
