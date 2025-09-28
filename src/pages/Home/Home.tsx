import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import HeroSection from "../../components/HeroSection/HeroSection";

function Home() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <>
      <HeroSection />
        <div className="card h-96 mt-[100px]">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("warm")}>Warm</button>
        <button onClick={() => setTheme("cold")}>Cold</button>
      </div>
    </>
  );
}

export default Home;
