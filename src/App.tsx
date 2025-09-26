import AppRoutes from "./routes/AppRoutes";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const setTheme = (theme:string) => {
    document.documentElement.setAttribute("data-theme", theme);
  };
  return (
    <>
      <AppRoutes />
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="bg-background text-foreground">
        <button className="text-primary px-4 py-2 rounded border-2 border-border">
          Themed Button
        </button>
      </div>
      <div className="card">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("warm")}>Warm</button>
        <button onClick={() => setTheme("cold")}>Cold</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
