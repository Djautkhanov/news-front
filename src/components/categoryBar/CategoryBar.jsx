import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getNewsCategory } from "../../features/newsSlice";
import "./categoryBar.css"

const CategoryBar = () => {
  const category = useSelector((state) => state.reducer.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsCategory());
  }, [dispatch]);

  return (
    <div className="category-bar">
      {category.map((item) => {
        return (
          <div className="category-block">
            <NavLink to={`/news/category/${item._id}`}>{item.name}</NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBar;
