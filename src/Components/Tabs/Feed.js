import React from "react";
import "./Feed.css";
import AssetsLinks from "../../Assets/AssetsLinks.json";


const Feed = () => {

  const Posts = {
    profileAvatar: "https://example.com/avatar.jpg",
    posts: [
      {
        id: 1,
        title: "Hello World!",
        desc: "This is my site where I try and post about what I'm up to and how to do things with code. You can follow along with Github by hitting the \"Follow\" button up above. Or just check back here every now and then.",
        mood: "🌴 Feeling Fresh",
        image: AssetsLinks.Post1,
        date: "20 Jan 2023"
      },
      
    ]
  };

  return (
    <div className="feed-container">
      {Posts.posts.map((post) => (
        <div key={post.id} className="feed-post">
          <div className="feed-post-avatar-container">
            <img
              alt="profile-avatar"
              className="feed-post-avatar"
              src={AssetsLinks.profileAvatar}
            />
          </div>

          <div className="feed-post-info">
            <div className="feed-post-name">
              Wasim ✨
              <span className="feed-post-date">{post.date}</span>
            </div>
            <div className="feed-post-mood">{post.mood}</div>
            <div className="feed-post-title">{post.title}</div>
            <div className="feed-post-desc">{post.desc}</div>

            {post.image && (
              <div>
                <img className="feed-post-image" src={post.image} alt={post.title} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
