import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNews, getNewsCategory } from "../../features/newsSlice";
import News from "../News-Card/News";
import "./Main.css";

const Main = () => {
  const dispatch = useDispatch();
  // const news = useSelector((state) => state.reducer.news);
  // const category = useSelector((state) => state.reducer.category);
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const news = useSelector((state) =>
    state.reducer.news.filter((item) => {
      if (!categoryId) return true;
      return item.category === categoryId;
    })
  );

  console.log(news);

  const category = useSelector((state) =>
    state.reducer.category.filter((item) => {
      if (!categoryId) return true;
      return item._id === categoryId;
    })
  );

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
                if (item.category === category._id) {
                  return (
                    <News
                      key={item._id}
                      text={item.text}
                      image={item.image}
                      title={item.title}
                      comment={item.newsCommit.length}
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
