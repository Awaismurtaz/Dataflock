import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Default background position
  let bgPosition = "center -950px";
  let bgAttchment= "fixed";

  // Change position if user is on /matching-news
  if (location.pathname === "/matching-news") {
    bgPosition = "center -1400px";
    bgAttchment = "fixed";

  } else if ((location.pathname === "/news-view")){
    bgPosition = "center center";
    bgAttchment = "scroll";

  }
  
  return (
    <div>
      <div className='container-fluid px-0 '>
        <div className="main_content_wrap"
          style={{ backgroundPosition: bgPosition, backgroundAttachment:bgAttchment }}>
          <div className="sidebar_wrap">
          <Sidebar />
        </div>
        <div className="main_layout_content">
          <div className="header_wrap">
              <Header  />
          </div>
          <Outlet />
          <Footer/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
