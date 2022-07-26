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
    <div className="col-4">
      <div className="p-card">
        <header className="u-align--left">
          <h5>CLOUD AND SERVER</h5>
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
        <div className="p-card__inner u-align--left">
          <p>Article</p>
        </div>
      </div>
    </div>
  );
};

export default EachPost;
