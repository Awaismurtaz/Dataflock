import CircularProgress from "./CircularProgress"; // adjust path if needed

const LatestNews = () => {
    return (
        <div className="news_comment_card">
            <h6 className="comment_title fw-semibold">Gold Prices Surge</h6>
            <p className="text-white fw-light comment_description">
                Gold prices have surged to record highs,
                reflecting growing investor concerns.
                Global economic uncertainty continues to drive demand.
            </p>

            <div className="news_detail d-flex align-items-center justify-content-between gap-2 flex-wrap">
                <div className="category_wrap d-flex gap-2 align-items-center small">
                    <p className="text-white mb-0">
                        <span className="active_news"></span> vor 1 Std
                    </p>
                    <span className="category">Finance</span>
                    <span className="category">Markets</span>
                </div>
                <div className="category_wrap d-flex align-items-center gap-3 small">
                    <span className="post_time">3 min</span>
                    <CircularProgress progress={70} />
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
