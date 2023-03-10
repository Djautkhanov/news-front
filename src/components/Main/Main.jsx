import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNews, getNewsCategory } from "../../features/newsSlice";
import News from "../News-Card/News";
import "./Main.css";

const Main = () => {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  
  const news = useSelector((state) =>
    state.newsSlice.news.filter((item) => {
      if (!categoryId) return true;
      return item.category === categoryId;
    })
    );
    console.log(news);


  const category = useSelector((state) =>
    state.newsSlice.category.filter((item) => {
      if (!categoryId) return true;
      return item._id === categoryId;
    })
  );
  console.log(category);
  

  return (
    <main>
      {category.map((category) => {
        let i = 0;
        return (
          <>
            <div className="main-cotegory">
              <div className="span"></div>
              <div className="color-category">{category.name}</div>
            </div>
            <div className="main-news">
              {news.map((item) => {
                if (item.category === category._id && i < 3) {
                  i++
                  return (
                    <News
                      key={item._id}
                      text={item.text}
                      image={item.image}
                      title={item.title}
                      comment={item.newsComment.length}
                      _id={item._id}
                    />
                  );
                }
              })}
            </div>
          </>
        );
      })}
    </main>
  );
};

export default Main;
