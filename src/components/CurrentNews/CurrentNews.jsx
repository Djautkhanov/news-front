import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNews } from '../../features/newsSlice';
import "./CurrentNews.css"

const CurrentNews = () => {

const {id} = useParams()
const dispatch = useDispatch()
useEffect(()=> {
    dispatch(getNews())
})
const news = useSelector((state) => state.reducer.news.filter(item => item._id === id))
const user = useSelector((state) => state.reducer.user)

if(!news.length){
    return (
        <div>Загрузка</div>
    )
}
    return (
    <>
    {news.map(item => {
        return(
            <>
        <div className="news-card">
            <div className="news-image">
            <div className="title">{item.title}</div>
            <img src={item.image} alt="" />
            </div>
            <div className="n-text">
            <div className="text">{item.text}</div>
            </div>
                </div>
            <div className="comments">
                {item.newsCommit ? <div className='none-comment'>нет комментарий</div> : 
                item.newsCommit.map(comment => {
                    <div className="comment-block">
                    <div className="comment-text">{comment.text}</div>
                    <div className="user-name">user</div>
                    </div>
                })}
            
            </div>
            </>
    )
})}            
    </>
    );
};

export default CurrentNews;