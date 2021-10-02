import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Header from './Component/Header/Header';
import TimeTable from './Pages/TimeTable/TimeTable';
import AddTimeTable from './Pages/AddTimeTable/AddTimeTable';
import BookingDetails from './Pages/BookingDetails/BookingDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/timeTable/addTimeTable">
            <AddTimeTable />
          </Route>
          <Route path="/timeTable" exact>
            <TimeTable />
          </Route> 
          <Route path="/bookingDetails" exact>
            <BookingDetails />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
