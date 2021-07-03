import { useEffect, useRef, useState } from "react";
import Editor from "./Editor";
import "./NewPost.css"

function NewPost({setOpenBar, openBar}) {

  const [input, setInput ] = useState("");
  const newPost = useRef(null);
  useEffect(()=>{
    if(openBar) newPost.current.style.transform = "translate(0)"
  })

  const handleClose = () => {
    setTimeout(()=>{
      setOpenBar(false)
    },500)
    newPost.current.style.transform = "translate(25em)"
  }

  return (
    <div className="NewPost-main">
      {openBar && <div onClick={handleClose} className="ClickToExit"/>}
      <div ref={newPost} className="NewPost">
        <div className="top">
          <div className="title">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1666 14.1666C22.1666 14.7189 21.7189 15.1666 21.1666 15.1666H16.1666C15.6143 15.1666 15.1666 15.6144 15.1666 16.1666V21.1666C15.1666 21.7189 14.7189 22.1666 14.1666 22.1666H13.8333C13.281 22.1666 12.8333 21.7189 12.8333 21.1666V16.1666C12.8333 15.6144 12.3855 15.1666 11.8333 15.1666H6.83325C6.28097 15.1666 5.83325 14.7189 5.83325 14.1666V13.8333C5.83325 13.281 6.28097 12.8333 6.83325 12.8333H11.8333C12.3855 12.8333 12.8333 12.3856 12.8333 11.8333V6.83331C12.8333 6.28103 13.281 5.83331 13.8333 5.83331H14.1666C14.7189 5.83331 15.1666 6.28103 15.1666 6.83331V11.8333C15.1666 12.3856 15.6143 12.8333 16.1666 12.8333H21.1666C21.7189 12.8333 22.1666 13.281 22.1666 13.8333V14.1666Z" fill="#4F4F4F"/>
            </svg>
            <h2>NewPost</h2>
          </div>
          <div onClick={handleClose} className="close">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3501 6.66168C21.1321 6.44322 20.8362 6.32044 20.5276 6.32044C20.219 6.32044 19.9231 6.44322 19.7051 6.66168L14.0001 12.355L8.29509 6.65001C8.07712 6.43155 7.78119 6.30878 7.47259 6.30878C7.16398 6.30878 6.86806 6.43155 6.65009 6.65001C6.19509 7.10501 6.19509 7.84001 6.65009 8.29501L12.3551 14L6.65009 19.705C6.19509 20.16 6.19509 20.895 6.65009 21.35C7.10509 21.805 7.84009 21.805 8.29509 21.35L14.0001 15.645L19.7051 21.35C20.1601 21.805 20.8951 21.805 21.3501 21.35C21.8051 20.895 21.8051 20.16 21.3501 19.705L15.6451 14L21.3501 8.29501C21.7934 7.85168 21.7934 7.10501 21.3501 6.66168Z" fill="#4F4F4F"/>
            </svg>
          </div>
        </div>
        <div className="user">
          <div className="profPicture">
            <img src="" alt="" />
          </div>
          <h3>moodyvoodie</h3>
        </div>
        <div className="body">
          <Editor input={input} setInput={setInput} placeHolder="Write your mind..."/>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" fill="#4F4F4F" fillOpacity="0.7"/>
          </svg>
        </div>
        <div className="bottom">
          <button className="post">post</button>
          <button className="cancel">cancel</button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
