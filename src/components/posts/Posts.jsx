import React, { useState, useEffect } from "react";
import EachPost from "../each-post/EachPost";
import "./Posts.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <div className="main_container">
      <div className="row">
        {posts &&
          posts.map((post) => {
            return <EachPost key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
};

export default Posts;
