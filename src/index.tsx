import React from "react";
import ReactDOM from "react-dom";
// これが読み取られない
import * as styles from "./index.css";

const App = () => <div>app</div>;

ReactDOM.render(App(), document.getElementById("app"));
