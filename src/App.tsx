import Header from "./Header";
import Home from "./Home";
import About from "./About";
import "./Home.css";
import PokemonCard from "./components/PokemonCard";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <PokemonCard />
    </div>
  );
}

export default App;
