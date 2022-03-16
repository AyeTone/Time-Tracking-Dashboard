import Cards from "./components/Cards/Cards";
import UserCard from "./components/UserCard/UserCard";
import { TimeFramesContext } from "./Context/timeFrameContext";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [timeFrames, setTimeFrames] = useState([
    {
      time: "Daily",
      isActive: true,
    },
    {
      time: "Weekly",
      isActive: false,
    },
    {
      time: "Monthly",
      isActive: false,
    },
  ]);

  return (
    <TimeFramesContext.Provider value={{ timeFrames, setTimeFrames }}>
      <div className="App">
        <UserCard />
        <Cards />
      </div>
      <Footer />
    </TimeFramesContext.Provider>
  );
}

export default App;
