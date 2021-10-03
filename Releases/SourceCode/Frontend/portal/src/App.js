import logo from './logo.svg';
import { Route, Switch, BrowserRouter } from "react-router-dom"
import './App.css';
import Header from './Component/Header/Header';
import TimeTable from './Pages/TimeTable/TimeTable';
import AddTimeTable from './Pages/AddTimeTable/AddTimeTable';
import AddRoute from './Pages/AddRoute/AddRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
        <Route path="/addRoute">
            <AddRoute/>
          </Route>
          <Route path="/timeTable/addTimeTable">
            <AddTimeTable />
          </Route>
          <Route path="/timeTable">
            <TimeTable />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
