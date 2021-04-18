import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/postActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useEffect } from "react";
import PostCard from "../components/PostCard";
import FitnessCard from "../components/FitnessCard";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const postList = useSelector((state) => state.postList);
    const { loading, error, posts } = postList;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(listPosts());
    }, [dispatch]);

    const renderBlogPosts = () => {
        return (
            <>
                {posts
                    .map((post) => (
                        <PostCard
                            id={post._id}
                            title={post.title}
                            image={post.postImage}
                            createdAt={post.createdAt}
                            summary={post.summary}
                        />
                    ))
                    .slice(0, 3)}
            </>
        );
    };

    const renderFItnessPosts = () => {
        const mockCards = [
            <PostCard />,
            <PostCard />,
            <PostCard />,
            <PostCard />,
            <PostCard />,
        ];
        return (
            <>
                {mockCards.map((post) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 py-3">
                        {post}
                    </div>
                ))}
            </>
        );
    };

    return (
        <>
            {/* Hero Section */}
            <section className="pb-5" id="home-hero-section">
                <div className="container-fluid no-padding">
                    <div className="row no-gutters">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="img-left title-center">
                                <h1>
                                    <a href="/blog-list" className="title">
                                        blog
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="img-right title-center">
                                <h1>
                                    <a href="/fitness-list" className="title">
                                        fitness
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog List */}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <section id="home-blog-list-section">
                    <div className="container py-4">
                        <div className="text-center pb-3">
                            <h3>My Latest Posts</h3>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                {renderBlogPosts()}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <hr />
            <section id="home-fitness-list-section">
                <div className="container py-4">
                    <div className="text-center pb-3">
                        <h3>My Fitness Journey</h3>
                    </div>
                    <div className="row">{renderFItnessPosts()}</div>
                </div>
            </section>
        </>
    );
};

export default HomeScreen;
