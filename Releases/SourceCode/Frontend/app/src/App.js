import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom"

import BookingDetails from './Pages/BookingDetails/BookingDetails';
import BookTicket from './Pages/BookTicket/BookTicket';
import AvaliableBuses from './Pages/AvaliableBuses/AvaliableBuses';
import BottomNavBar from './Component/BottomNav/BottomNav';
import TicketSummary from './Pages/TicketSummary/TicketSummary';
TicketSummary
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/ticketSummary" >
            <TicketSummary />
            <BottomNavBar />
          </Route>
          <Route path="/bookingDetails" >
            <BookingDetails />
            <BottomNavBar />
          </Route>
          <Route path="/bookTickets" >
            <BookTicket />
            <BottomNavBar />
          </Route>
          <Route path="/avaliableBuses" >
            <AvaliableBuses />
            <BottomNavBar />
          </Route>
        </Switch>
        <BottomNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
