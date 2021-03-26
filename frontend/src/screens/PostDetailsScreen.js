import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PostDetailsScreen = () => {
  return (
    <>
      {/* Title Section */}
      <section id="title-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>This is a Post Title</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Post Image Section */}
      <section id="post-img-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                   
              </div>
          </div>
        </div>
      </section>
      {/* TLDR Section */}
      <section id="tldr-section">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      {/* Content Section */}
      <section id="content-section">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </>
  );
};

export default PostDetailsScreen;
