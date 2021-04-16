import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailPost } from "../actions/postActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";

const PostDetailsScreen = ({ match }) => {
  const postID = match.params.id;
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(detailPost(postID));
  }, [dispatch, postID]);
  
  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* Title Section */}
          <section className="pt-3" id="title-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-3">
                  <h2>{post.title}</h2>npm run
                </div>
              </div>
            </div>
          </section>
          {/* Post Image Section */}
          <section id="post-img-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-3">
                  <img
                    className="img-fluid"
                    src="http://placehold.it/500x300"
                    alt=""
                  />
                </div>
              </div>
              <div className="row py-2">
                <div className="col-md-8 offset-md-3">
                  <div className="row">
                    <div className="col-6">
                      <h5>By: Landon McKell</h5>
                    </div>
                    <div className="col-6">
                      <p>Created: {moment(post.createdAt).format("ll")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TLDR Section */}
          <section className="py-2" id="tldr-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-3">
                  <h6 className="text-muted">TLDR; {post.tldr}</h6>
                </div>
              </div>
            </div>
          </section>
          {/* Content Section */}
          <section id="content-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-3">
                  {ReactHtmlParser(post.content)}
                </div>
              </div>
            </div>
          </section>
          {/* Post Comment Section - Coming Soon */}
        </>
      )}
    </div>
  );
};

export default PostDetailsScreen;
