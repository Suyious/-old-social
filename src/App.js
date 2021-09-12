import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./context/auth";
import { useEffect } from "react";
import Post from "./pages/Post";

function App() {

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if(darkMode==="true") {
      const root = document.querySelector(":root");
      root.style.setProperty("--primary", "#250D07");
      root.style.setProperty("--secondary","#313131");
      root.style.setProperty("--secondary-trans", "#261818E5");
      root.style.setProperty("--secondary-trans-var", "#261818");
      root.style.setProperty("--tertiary-text", "#DBDCE8");
      root.style.setProperty("--editor-body", "#302727");
      root.style.setProperty("--primary-text", "#fff");
      root.style.setProperty("--highlight", "#cccccc1f");
    }
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={Post} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
