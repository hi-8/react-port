import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from './App.module.scss';
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";


const App: React.FC =() => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <Router>
          <Switch>
            <Route path="/works" component={WorksPage} exact />
            <Route path="/" component={HomePage} exact />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
