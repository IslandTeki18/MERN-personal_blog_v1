import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/Header";
import Footer from "./app/Footer";
import HomeScreen from "./screens/HomeScreen";
import PostDetailsScreen from "./screens/PostDetailsScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./screens/LoginScreen";
import PostListScreen from "./screens/PostListScreen";
import AdminPostListScreen from "./screens/AdminPostListScreen";
import AdminPostEditScreen from "./screens/AdminPostEditScreen";
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
      </main>
      <Footer />
    </Router>
  );
}

export default App;
