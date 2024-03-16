import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Tokenomics from "./components/Tokenomics";
import Howto from "./components/Howto";
import Header from "./components/Header";



function App() {
  return (
    <div className="overflow-clip relative flex flex-col" >
      <Header />
      <Hero />
      <Welcome />
      <Tokenomics />
      <Howto />
    </div>
  );
}

export default App;
