import React, { useContext } from "react";
import "./Home.css"
import PostCard from "../components/PostCard";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import { AuthContext } from "../context/auth";
import { Redirect } from "react-router";
import {FETCH_POSTS_QUERY} from "../util/graphql"

function Home() {
  
  const {user} = useContext(AuthContext);
  const {loading,error,data} = useQuery(FETCH_POSTS_QUERY);
  if(error) console.log(error)

  return (
    !user? 
    <Redirect to="/login"/>:
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

export default Home;
