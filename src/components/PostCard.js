import React, { useContext, useState } from 'react';
import "./PostCard.css";
import moment from 'moment';
import { Link } from "react-router-dom";
import DropDown from './DropDown';
import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

function PostCard({post: {username, body, id, createdAt,likesCount,likes,commentsCount}}) {

    const [liked, setLiked] = useState(false);
    const [openMore, setOpenMore] = useState(false);

    const {user} = useContext(AuthContext);

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
                    <svg  onClick={()=>setOpenMore(!openMore)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z" fill="#6D7D8B"/>
                    </svg>
                    <DropDown openDrop={openMore} setOpenDrop={setOpenMore}>
                        <div className="MoreDrop">
                            <ul>
                                <li className="report">
                                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"/><rect height="6" width="2" x="11" y="7"/><rect height="2" width="2" x="11" y="15"/></g></g></g></svg>
                                    report
                                </li>
                                {user && username===user.username && 
                                    <DeleteButton dropDownControl={setOpenMore} postId={id}/>
                                }
                            </ul>
                        </div>
                    </DropDown>
                </div>
            </div>
            <Link to={`/posts/${id}`}>
                <div className="body">
                    <h2>{body}</h2>
                </div>
            </Link>
            <div className="bottom">
                <div className="bottom_left">
                    <LikeButton user={user} post={{id, likes, likesCount}}/>
                    <Link to={`/posts/${id}`} className="bottom_button comment">
                        <svg onClick={commentPost} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22L2.01 4C2.01 2.9 2.9 2 4 2ZM7 14H17C17.55 14 18 13.55 18 13C18 12.45 17.55 12 17 12H7C6.45 12 6 12.45 6 13C6 13.55 6.45 14 7 14ZM17 11H7C6.45 11 6 10.55 6 10C6 9.45 6.45 9 7 9H17C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11ZM7 8H17C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6H7C6.45 6 6 6.45 6 7C6 7.55 6.45 8 7 8Z" fill="#4F4F4F"/>
                        </svg>
                        <p>{commentsCount}</p>
                    </Link>
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
