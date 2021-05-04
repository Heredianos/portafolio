import React,{useState, useEffect} from 'react';
import './App.css';
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import Badge from "./components/About";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Footer from "./components/Footer";
function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <Badge/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
