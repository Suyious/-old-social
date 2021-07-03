import React from "react";
import "./Home.css"
import PostCard from "../components/PostCard";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";


function Home() {

  const {loading,error,data} = useQuery(FETCH_POSTS_QUERY);
  if(error) console.log(error)

  return (
    <div className="Home">
      <div className="wrapper">
        {loading? (
          <Loading/>
        ):(
          data ? data.getPosts.map(post => (
              <PostCard key={post.id} post={post}/>
          )): <p>Could not reach server. Reload</p>
        )}
      </div>
    </div>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likesCount
      likes {
        username
      }
      commentsCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
