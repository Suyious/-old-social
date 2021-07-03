import React, { useState } from 'react';
import "./PostCard.css";
import moment from 'moment';
import { Link } from "react-router-dom";

function PostCard({post: {username, body, id, createdAt,likesCount,likes,commentsCount}}) {

    const [liked, setLiked] = useState(false);

    const likePost = () => {
        setLiked(!liked);
    }

    const commentPost = () => {
        console.log("Commented")
    }

    return (
        <div className="PostCard">
            <div className="top">
                <div className="profile">
                    <div className="profPicture">
                        <img src={`https://randomuser.me/api/portraits/men/${id.substr(id.length-3,1)}.jpg`} alt="" />
                    </div>
                    <div className="user">
                        <h3>{username}</h3>
                        <p>{moment(createdAt).fromNow()}</p>
                    </div>
                </div>
                <div className="more">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z" fill="#6D7D8B"/>
                    </svg>
                </div>
            </div>
            <Link to={`/posts/${id}`}>
                <div className="body">
                    <h2>{body}</h2>
                </div>
            </Link>
            <div className="bottom">
                <div className="bottom_left">
                    <div className="bottom_button like" >
                        {!liked ? <svg onClick={likePost} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 5.2672C13.7602 3.2072 17.0202 2.3672 19.6602 4.1672C21.0602 5.1272 21.9402 6.7472 22.0002 8.4472C22.1302 12.3272 18.7002 15.4372 13.4502 20.1972L13.3402 20.2972C12.5802 20.9972 11.4102 20.9972 10.6502 20.3072L10.5502 20.2172L10.4898 20.1623C5.27384 15.4233 1.86075 12.3223 2.00021 8.4572C2.06021 6.7472 2.94021 5.1272 4.34021 4.1672C6.98021 2.3572 10.2402 3.2072 12.0002 5.2672ZM12.0002 18.8272L12.1002 18.7272C16.8602 14.4172 20.0002 11.5672 20.0002 8.6772C20.0002 6.6772 18.5002 5.1772 16.5002 5.1772C14.9602 5.1772 13.4602 6.1672 12.9402 7.5372H11.0702C10.5402 6.1672 9.04021 5.1772 7.50021 5.1772C5.50021 5.1772 4.00021 6.6772 4.00021 8.6772C4.00021 11.5672 7.14021 14.4172 11.9002 18.7272L12.0002 18.8272Z" fill="#4F4F4F"/>
                        </svg>:
                        <svg onClick={likePost} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3497 20.3072C12.5897 20.9972 11.4197 20.9972 10.6597 20.2972L10.5497 20.1972C5.29966 15.4472 1.86966 12.3372 1.99966 8.4572C2.05966 6.7572 2.92966 5.1272 4.33966 4.1672C6.97966 2.3672 10.2397 3.2072 11.9997 5.2672C13.7597 3.2072 17.0197 2.3572 19.6597 4.1672C21.0697 5.1272 21.9397 6.7572 21.9997 8.4572C22.1397 12.3372 18.6997 15.4472 13.4497 20.2172L13.3497 20.3072Z" fill="#FF5151"/>
                        </svg>}
                        <p>{likesCount}</p>
                    </div>
                    <div className="bottom_button comment">
                        <svg onClick={commentPost} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22L2.01 4C2.01 2.9 2.9 2 4 2ZM7 14H17C17.55 14 18 13.55 18 13C18 12.45 17.55 12 17 12H7C6.45 12 6 12.45 6 13C6 13.55 6.45 14 7 14ZM17 11H7C6.45 11 6 10.55 6 10C6 9.45 6.45 9 7 9H17C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11ZM7 8H17C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6H7C6.45 6 6 6.45 6 7C6 7.55 6.45 8 7 8Z" fill="#4F4F4F"/>
                        </svg>
                        <p>{commentsCount}</p>
                    </div>
                </div>
                <div className="bottom_right">
                    <div className="bottom_button share">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 9V5L21 12L14 19V14.9C9 14.9 5.5 16.5 3 20C4 15 7 10 14 9Z" fill="#4F4F4F"/>
                        </svg>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
