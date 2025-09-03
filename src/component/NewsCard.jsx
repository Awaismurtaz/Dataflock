import NewImage from "../assets/images/new-imag.png";
import CircularProgress from '../component/CircularProgress.jsx';
const NewsCard = (props) => {
    const { value, viewMode }=props;
  return (
      <div className=" news-card overflow-hidden rounded-4 ">
          <div className="row g-0">
              {/* Left image */}
              <div className={`${viewMode === "list" ? "col-4" :"col-12 news_image_box"} `}>
                  <img src={NewImage} alt="news" className="w-100 h-100 object-fit-cover" />
              </div>

              {/* Right content */}
              <div className={`${viewMode === "list" ? "col-8" : "col-12"} p-3 text-white d-flex flex-column justify-content-between`}>
                  <div>
                      <h4 className="fw-light">
                          Harness the Future of AI Solutions
                      </h4>
                      <p className="text-whitem fw-light">
                          Leverage advanced algorithms to optimize decision-making processes, automate mundane tasks,
                          and drive innovation. Our AI tools are designed to seamlessly integrate with your existing workflows.
                      </p>
                  </div>
                  <div className="news_detail d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <div className="d-flex gap-3 align-items-center small  justify-content-between w-100">
                          <p className='text-white mb-0'>
                              <span className='active_news '></span>
                              vor 5 Std
                          </p>
                          <span className='category'>Theme 1</span>
                          <span className='category'>Theme 2</span>
                      </div>
                      <div className="d-flex align-items-center gap-3 small justify-content-between w-100">
                          <span className='post_time'>5 min</span>
                          <CircularProgress progress={value+ 20} />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default NewsCard
