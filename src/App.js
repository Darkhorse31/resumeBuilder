import "./App.css";

import { Routes, Route } from "react-router-dom";
import MainPage from "./container/MainPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
