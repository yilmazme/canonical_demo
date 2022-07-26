import React, { useState, useEffect } from "react";
import EachPost from "../each-post/EachPost";
import "./Posts.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json");
    const data = await res.json();

    return data;
  };
  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => console.log("Error: ", err));

    return () => {};
  }, []);

  return (
    <div className="row u-no-padding ">
      {posts &&
        posts.map((post) => {
          return <EachPost key={post.id} post={post} />;
        })}
    </div>
  );
};

export default Posts;
