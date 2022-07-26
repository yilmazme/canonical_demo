import React from "react";
import "./EachPost.scss";

const EachPost = ({ post }) => {
  return (
    <>
      <div className="col-4">
        <div className="p-card">
          <p className="u-align--left">CLOUD AND SERVER</p>
          <hr className="" />
          <img className="p-card__image" src={post.featured_media} alt="" />
          <div className="p-card__inner">
            <div className="header u-align--left">
              <a href={post.link} target="_blank" rel="noreferrer">
                {post.title.rendered}
              </a>
            </div>
            <p className="u-align--left">
              {" "}
              by{" "}
              <a href={post._embedded.author[0].link} target="_blank" rel="noreferrer">
                <i>{post._embedded.author[0].name}</i>
              </a>{" "}
              on{" "}
              {new Date(Date.parse(post.date)).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <hr className="u-no-margin--bottom" />
          <div className="p-card__inner u-align--left">Article</div>
        </div>
      </div>
    </>
  );
};

export default EachPost;
