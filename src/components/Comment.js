import {useState} from "react";
import moment from 'moment';
import DeleteButton from '../components/DeleteButton';
import DropDown from '../components/DropDown';
import "./Comment.css"

const Comment = ({comment, user, postId}) => {
  
  const [openMore, setOpenMore] = useState(false);

  return (
    <div className="comment_card">
      <div className="comment_head">
        <div className="comment_head_left">
          <h3>{comment.username}</h3>                    
          <p className="comment_time">{moment(comment.createdAt).fromNow()}</p>
        </div>
        <div className="more">
            <svg onClick={()=>setOpenMore(!openMore)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z" fill="#6D7D8B"/></svg>
            <DropDown openDrop={openMore} setOpenDrop={setOpenMore}>
                <div className="MoreDrop">
                    <ul>
                        <li className="report">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"/><rect height="6" width="2" x="11" y="7"/><rect height="2" width="2" x="11" y="15"/></g></g></g></svg>
                            report
                        </li>
                        {user && comment.username===user.username &&
                            <DeleteButton dropDownControl={setOpenMore} postId={postId} commentId={comment.id}/>
                        }
                    </ul>
                </div>
            </DropDown>
        </div>
      </div> 
      <p className="comment_body">{comment.body}</p>
    </div>
  )
}

export default Comment;
