import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Tokenomics from "./components/Tokenomics";
import Howto from "./components/Howto";



function App() {
  return (
    <div className="overflow-clip">
      <Hero />
      <Welcome />
      <Tokenomics />
      <Howto />
    </div>
  );
}

export default App;
