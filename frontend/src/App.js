import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/Header";
import Footer from "./app/Footer";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import PostDetailsScreen from "./screens/postDetailsScreen/PostDetailsScreen";
import ContactScreen from "./screens/contactScreen/ContactScreen";
import BlogPostListScreen from "./screens/blogPostListScreen/BlogPostListScreen";
import FitnessPostListScreen from "./screens/fitnessPostListScreen/FitnessPostListScreen";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/post/:id" component={PostDetailsScreen} />
                <Route path="/contact" component={ContactScreen} />
                <Route path="/fitness-list" component={FitnessPostListScreen} />
                <Route path="/blog-list" component={BlogPostListScreen} />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
