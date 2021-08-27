import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/Header";
import Footer from "./app/Footer";
import HomeScreen from "./screens/HomeScreen";
import PostDetailsScreen from "./screens/PostDetailsScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./screens/LoginScreen";
import BlogPostListScreen from "./screens/BlogPostListScreen";
import FitnessPostListScreen from "./screens/FitnessPostListScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/post/:id" component={PostDetailsScreen} />
                <Route path="/contact" component={ContactScreen} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/registration" component={RegistrationScreen} />
                <Route path="/fitness-list" component={FitnessPostListScreen} />
                <Route path="/blog-list" component={BlogPostListScreen} />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
