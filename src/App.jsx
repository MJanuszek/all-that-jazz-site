import "./App.css";
import Header from "./Header";
import JazzInfo from "./JazzInfo";
import JazzLegends from "./JazzLegends";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Navigation from "./Nav";

function App() {
  return (
    <div className="wrapper-app">
      <Header />
      <Navigation />
      <JazzInfo />
      <JazzLegends />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
