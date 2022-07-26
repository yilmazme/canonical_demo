import React from "react";
import "./EachPost.scss";

const EachPost = ({ post }) => {
  const getDesiredDateFormat = (date) => {
    let desiredDateFormat = new Date(Date.parse(date)).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return desiredDateFormat;
  };
  return (
    <div className="col-4 p-card">
      <header className="u-no-padding--left edges">
        <h5>{post._embedded["wp:term"][1][0].name.toUpperCase()}</h5>
      </header>
      <div className="blog-p-card__content">
        <img className="p-card__image" src={post.featured_media} alt={post.featured_media} />
        <div className="p-card__inner u-no-padding--left">
          <div className="title">
            <a href={post.link} target="_blank" rel="noreferrer">
              {post.title.rendered}
            </a>
          </div>
          <p className="u-no-margin--top">
            <em>
              By{" "}
              <a href={post._embedded.author[0].link} target="_blank" rel="noreferrer">
                {post._embedded.author[0].name}
              </a>{" "}
              on {getDesiredDateFormat(post.date)}
            </em>
          </p>
        </div>
      </div>
      <div className="p-card__inner u-no-padding--bottom  edges">Article</div>
    </div>
  );
};

export default EachPost;
