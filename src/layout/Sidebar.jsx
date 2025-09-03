import { Link } from "react-router-dom"; // import Link
import UserAvatar from "../assets/images/Display Picture Variants.png";
import Logo from "../assets/images/Logo.svg";
import DataIcon from "../assets/images/calender.svg";
import CompaniesIcon from "../assets/images/companies.svg";
import DashboardIcon from "../assets/images/dashboard.svg";
import ReportsIcon from "../assets/images/file.svg";
import HelpIcon from "../assets/images/help.svg";
import InsightsIcon from "../assets/images/insights.svg";
import ModelsIcon from "../assets/images/models.svg";
import NotificationsIcon from "../assets/images/notification.svg";
import Pin from "../assets/images/pin.svg";
import Ring from "../assets/images/ring.svg";
import SettingsIcon from "../assets/images/setting.svg";
import NewsIcon from "../assets/images/side_news_logo.svg";
import LogoutIcon from "../assets/images/sign-out-alt.svg";


const Sidebar = () => {
  return (
    <div className="sidebar__menu">
      <div className="pin_icon mb-4 d-flex justify-content-end">
        <img src={Pin} alt="Logo" className="img-fluid" />
      </div>
      {/* Brand */}
      <div className="brand_section p-2 d-flex align-items-center gap-2 mb-4">
        <img src={Logo} alt="Logo" className="img-fluid" />
        <h4 className="text-white mb-0 fw-semibold brand_text">DataFlock</h4>
      </div>

      <div className="d-flex flex-column gap-5">

        {/* Navigation */}
        <ul className=" ps-0 sidebar__menu__list">
          <li>
            <Link to="#">
              <img src={DashboardIcon} alt="" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={DataIcon} alt="" />
              <span>Data</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={NewsIcon} alt="" />
              <span>News</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={ModelsIcon} alt="" />
              <span>Models</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={ReportsIcon} alt="" />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={CompaniesIcon} alt="" />
              <span>Companies</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={InsightsIcon} alt="" />
              <span>Market Insights</span>
            </Link>
          </li>
        </ul>

        <ul className="ps-0 sidebar__menu__list">
          <li className="active_list">
            <Link to="#" >
              <img src={Ring} alt="" />
              <span>Admin</span>
            </Link>
          </li>
        </ul>

        {/* Bottom Links */}
        <ul className="ps-0 sidebar__menu__list">
          <li>
            <Link to="#">
              <img src={NotificationsIcon} alt="" />
              <span>Notifications</span>
            </Link>
            <span className="badge">2</span>
          </li>
          <li>
            <Link to="#">
              <img src={HelpIcon} alt="" />
              <span>Help</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={SettingsIcon} alt="" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={LogoutIcon} alt="" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>

      </div>

      {/* User Section */}
      <div className="user_section d-flex align-items-center gap-2 pt-4">
        <img src={UserAvatar} alt="User" className="user_avatar" />
        <div>
          <h6 className="text-white ">Michael Smith</h6>
          <small className="text-white">admin@example.com</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
