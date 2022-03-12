import Cards from "./components/Cards/Cards";
import UserCard from "./components/UserCard/UserCard";
import { TimeFramesContext } from "./Context/timeFrameContext";
import { useState } from "react";

function App() {
  const [timeFrames, settimeFrames] = useState([
    {
      time: "Daily",
      isActive: true,
    },
    {
      time: "Weekly",
      isActive: false,
    },
    {
      time: "Hourly",
      isActive: false,
    },
  ]);

  return (
    <div className="App">
      <TimeFramesContext.Provider value={{ timeFrames, settimeFrames }}>
        <UserCard />
        <Cards />
      </TimeFramesContext.Provider>
    </div>
  );
}

export default App;
