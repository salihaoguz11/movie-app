import { useEffect } from "react";
import "./App.css";
import { userObserver } from "./auth/firebase";
import Router from "./router/Router";

function App() {
  useEffect(() => {
    userObserver();
  }, []);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
