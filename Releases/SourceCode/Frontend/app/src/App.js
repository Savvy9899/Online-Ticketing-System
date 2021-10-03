import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom"

import BookingDetails from './Pages/BookingDetails/BookingDetails';
import BookTicket from './Pages/BookTicket/BookTicket';
import AvaliableBuses from './Pages/AvaliableBuses/AvaliableBuses';
import BottomNavBar from './Component/BottomNav/BottomNav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/bookingDetails" >
            <BookingDetails />
          </Route>
          <Route path="/bookTickets" >
            <BookTicket />
          </Route>
          <Route path="/avaliableBuses" >
            <AvaliableBuses />
          </Route>
          <BottomNavBar />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
