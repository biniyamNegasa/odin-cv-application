import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

function App() {
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Resume",
    contentRef: printRef,
  });
  const [page, setPage] = useState("form");
  return (
    <>
      <div id="root" ref={printRef}>
        {page === "form" && <Form setPage={setPage} />}
        {page === "home" && (
          <Home setPage={setPage} handlePrint={handlePrint} />
        )}
      </div>
    </>
  );
}

export default App;
