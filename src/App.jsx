import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";

function App() {
  const [page, setPage] = useState("form");
  return (
    <div id="root">
      {page === "form" && <Form setPage={setPage} />}
      {page === "home" && <Home setPage={setPage} />}
    </div>
  );
}

export default App;
