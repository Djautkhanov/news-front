import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
const News = ({text , title , image, comment, _id}) => {
  return (
    <div className="card">
      <div className="news-img">
        <img src={image} alt=""
        />
      </div>
      <div className="news-title">{title}</div>
      <div className="news-date">ДАТА : 31 АВГ / ПОЛИТИКА</div>
      <div className="news-text">{text.slice(0,150)}...</div>
      <div className="news-btn">
        <Link to={`/news/current/${_id}`}><button>ПОДРОБНЕЕ</button></Link>
        <div className="news-comment">{comment} комментарий</div>
      </div>
    </div>
  );
};

export default News;
