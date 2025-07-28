import { useState } from "react";
import { Sidebar } from "./components";
import "./App.scss";

function App() {
    const [current, setCurrent] = useState("Home");
    return (
        <div className="app">
            <Sidebar setCurrent={setCurrent} />
            <div className="app__page">{current} page</div>
        </div>
    );
}

export default App;
