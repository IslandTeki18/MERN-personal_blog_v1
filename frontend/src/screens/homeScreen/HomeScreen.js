import "./HomeScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../actions/postActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useEffect } from "react";
import PostCard from "../../components/PostCard";
import SplitHeroSection from "./sections/splitHeroSection/SplitHeroSection";
import LatestPostSection from "./sections/latestPostsSection/LatestPostSection";
import FitnessPostsSection from "./sections/fitnessPostsSection/FitnessPostsSection";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.postList);
    const { loading, error } = postList;

    let mockCards = [
        <PostCard />,
        <PostCard />,
        <PostCard />,
        <PostCard />,
        <PostCard />,
    ];

    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
        dispatch(listPosts());
    }, [dispatch]);

    function renderError() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Message variant="danger" dismissible>
                            {error}
                        </Message>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dkHomeScreen">
            <SplitHeroSection />
            {loading ? (
                <Loader />
            ) : error ? (
                renderError()
            ) : (
                <LatestPostSection posts={mockCards} />
            )}
            <hr />
            <FitnessPostsSection posts={mockCards} />
        </div>
    );
};

export default HomeScreen;
