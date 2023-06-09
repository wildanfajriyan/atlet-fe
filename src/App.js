import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AtletList from "./components/AtletList";
import EditAtlet from "./components/EditAtlet";
import AddAtlet from "./components/AddAtlet";

function App() {
  const [atlet, setAtlet] = useState([]);

  useEffect(() => {
    getAtlet();
    console.log("render all atlet");
  }, []);

  const getAtlet = () => {
    fetch("http://localhost:5000/atlet")
      .then((res) => res.json())
      .then((data) => setAtlet(data));
  };

  return (
    <div
      style={{
        width: 1280,
        height: "100vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        gap: 30,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AtletList
                setAtlet={setAtlet}
                getAtlet={getAtlet}
                atlet={atlet}
              />
            }
          />
          <Route path="/add" element={<AddAtlet />} />
          <Route path="/edit/:id" element={<EditAtlet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
