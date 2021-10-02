import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  RiHomeSmile2Line,
  RiHomeSmile2Fill,
  RiUser5Fill,
  RiSearchEyeFill,
  RiTicket2Fill,
  RiTicket2Line,
  RiBus2Fill,
  RiBusFill,
  RiBusLine,
  RiSettings5Fill,
  RiSettings5Line,
} from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiUser5Line } from "react-icons/ri";
import "./BottomNav.css";

const BottomNavBar = (props) => {
  const history = useHistory();
  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case "home":
        history.push("/");
        break;
      case "ticket":
        history.push("/search");
        break;
      case "bus":
        history.push("/favourites");
        break;
      case "user":
        history.push("/account");
        break;
      case "cog":
        history.push("/account");
        break;
      default:
        history.push("/");
        break;
    }
  }, [activeTabs, history]);

  return (
    <div className="bottom-nav">
      <div className="bn-tab">
        {activeTabs === "home" ? (
          <RiHomeSmile2Fill
            size="35"
            color="#000"
            onClick={() => setActiveTabs("home")}
          />
        ) : (
          <RiHomeSmile2Line
            size="35"
            color="#000"
            onClick={() => setActiveTabs("home")}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "ticket" ? (
          <RiTicket2Fill
            size="35"
            color="#000"
            onClick={() => setActiveTabs("ticket")}
          />
        ) : (
          <RiTicket2Line
            size="35"
            color="#000"
            onClick={() => setActiveTabs("ticket")}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "bus" ? (
          <RiBusFill
            size="35"
            color="#000"
            onClick={() => setActiveTabs("bus")}
          />
        ) : (
          <RiBusLine
            size="35"
            color="#000"
            onClick={() => setActiveTabs("bus")}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "user" ? (
          <RiUser5Fill
            size="35"
            color="#000"
            onClick={() => setActiveTabs("user")}
          />
        ) : (
          <RiUser5Line
            size="35"
            color="#000"
            onClick={() => setActiveTabs("user")}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "cog" ? (
          <RiSettings5Fill
            size="35"
            color="#000"
            onClick={() => setActiveTabs("cog")}
          />
        ) : (
          <RiSettings5Line
            size="35"
            color="#000"
            onClick={() => setActiveTabs("cog")}
          />
        )}
      </div>
    </div>
  );
};

export default BottomNavBar;
