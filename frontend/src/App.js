import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/Header";
import Footer from "./app/Footer";
import HomeScreen from "./screens/HomeScreen";
import PostDetailsScreen from "./screens/PostDetailsScreen";



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/post/:id" component={PostDetailsScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
