import "./styles/news.scss";

function News() {
  return (
    <div className="news-wrapper" id="news">
      <div className="news-all">
        <h1 className="news-title">This week</h1>
        <div className="news-current"></div>
      </div>
      <div className="img-news"></div>
    </div>
  );
}

export default News;
