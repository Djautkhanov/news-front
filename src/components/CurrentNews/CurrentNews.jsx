import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addComment, getNews } from "../../features/newsSlice";
import { getUsers } from "../../features/user.Slice";
import Loader from "../Loader/Loader";

import "./CurrentNews.css";

const CurrentNews = () => {

  const { id } = useParams();
  const [comment, setComment] = useState("")
  const dispatch = useDispatch();
  
  const news = useSelector((state) => state.newsSlice.news);
  const user = useSelector((state) => state.userSlice.users);
  const token = useSelector((state) => state.userSlice.token)
  
    useEffect(() => {
      dispatch(getNews());
      dispatch(getUsers());
      window.scrollTo(0, 0);
    }, [dispatch]);

  const handelComment = (e) => {
    setComment(e.target.value)
  }

  const handleClickComment = () => {
    const token = localStorage.getItem("token")
 dispatch(addComment({token, comment, id}))
 setComment("")
  }

  if (!news.length) {
    return <Loader />;
  }
  return (
    
    <div className="page-news">
      <div className="news-news">
        {news.map((news) => {
          if (news._id !== id) {
            return (
              <Link to={`/news/current/${news._id}`}>
                <div className="news-13">
                  <img src={news.image} alt="" />
                  <div className="news-13-title">{news.title}</div>
                </div>
              </Link>
            );
          }
        })}
      </div>
      {news.map((item) => {
        if (item._id === id)
          return (
            <>
              <div className="news-card">
                <div className="title">{item.title}</div>
                <div className="news-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="n-text">
                  <div className="text">{item.text}</div>
                  <hr />
                </div>
                {token ? <div className="comment-inp-block">
                  <div>Добавить комментарий:</div>
                  <textarea name="" id="" cols="30" rows="20" value={comment} onChange={(e) => handelComment(e)}></textarea>
                  <button className="comment-btn" onClick={handleClickComment}>Добавить</button>
                  </div>
                 : <div className="comment-inp-block">Авторизуйтесь чтобы добавить комментарий </div>}
                <div className="comments">
                  <span> Коментарии:</span>
                  {item.newsComment.length ? (
                    item.newsComment.map((comment) => {
                      return (
                        <>
                        <div className="date">
                          {comment.date}
                        </div>
                        <div className="comment-block">
                          <div className="comment-text">
                            {comment.text}
                          </div>
                          <div className="user-name">
                            {user.map((item => {
                            if(comment.commentUserId === item._id){
                              return (
                              <div>
                                <div className="user-cooment">комментарий от:</div>
                                <div className="user-info">{item.firstName} {item.lastName}</div>

                              </div>
                              )
                            }
                          }))}
                          </div>
                        </div>
                        </>
                      );
                    })
                  ) : (
                    <div className="none-comment">нет комментарий</div>
                  )}
                </div>
              </div>
            </>
          );
      })}
    </div>
  );
};

export default CurrentNews;
