import Header from "./app/Header";
import Footer from "./app/Footer";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <div>
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
