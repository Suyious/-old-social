import "./DeleteButton.css"
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { FETCH_POSTS_QUERY } from "../util/graphql";

function DeleteButton({callback, dropDownControl ,postId, commentId}) {

    const [confirmOpen, setConfirmOpen] = useState(false);
    const mutation = commentId? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;
    const [deletePostorComment] = useMutation(mutation,{
        
        update(proxy){
            setConfirmOpen(false);
            if(!commentId){
             const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
              })
              //below commented code might give error read only
              // data.getPosts = data.getPosts.filter(p=>p.id !== postId);
              proxy.writeQuery({query: FETCH_POSTS_QUERY, data:{
                  getPosts: data.getPosts.filter(p=>p.id !== postId)
              }}); 
            }
            dropDownControl(false);
            if(callback) callback();
            //removing from cache
        },

        variables:{
            postId,
            commentId
        }
    })

    return (
        <>
            <li onClick={()=>setConfirmOpen(!confirmOpen)} className="deleteButton">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                delete   
            </li>
            {confirmOpen && <div className="confirmation">
                <div onClick={() => setConfirmOpen(false)} className="ClickToExit" />
                <div className="confirmDialog">
                  <h3>Do you wish to delete the {commentId? "comment" : "post" } ?</h3>
                    <button onClick={deletePostorComment}>Yes</button>
                    <button onClick={()=>setConfirmOpen(false)}>No</button>
                </div>
            </div>}
        </>
        
    )
}

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId: ID!){
        deletePost(postId: $postId)
    }
`

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!){
    deleteComment(postId: $postId, commentId: $commentId){
      id
      comments{
        id username createdAt body
      }
      commentsCount
    }
  }
`

export default DeleteButton
