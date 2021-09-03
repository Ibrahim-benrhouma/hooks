import React from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MovieList />
    </React.Fragment>
  );
}

export default App;