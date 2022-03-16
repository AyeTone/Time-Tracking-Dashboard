import {
  Container,
  Report,
  ActiveTime,
  Time,
  TimeFrames,
  User,
  UserImage,
  UserInfo,
  UserName,
} from "./UserCardStyles";

import { useState, useContext } from "react";
import { TimeFramesContext } from "../../Context/timeFrameContext";

const UserCard = () => {
  const { timeFrames, setTimeFrames } = useContext(TimeFramesContext);

  const times = timeFrames.map((time) => {
    return (
      <>
        {time.isActive && (
          <ActiveTime key={time.time} className={time.time}>
            {time.time}
          </ActiveTime>
        )}
        {!time.isActive && (
          <Time key={time.time} className={time.time}>
            {time.time}
          </Time>
        )}
      </>
    );
  });

  const toggleActive = (e) => {
    let newArr = [...timeFrames];

    const value = e.target;

    if (value.matches(".Daily")) {
      newArr[0].isActive = true;
      newArr[1].isActive = false;
      newArr[2].isActive = false;
    } else if (value.matches(".Weekly")) {
      newArr[0].isActive = false;
      newArr[1].isActive = true;
      newArr[2].isActive = false;
    } else if (value.matches(".Monthly")) {
      newArr[0].isActive = false;
      newArr[1].isActive = false;
      newArr[2].isActive = true;
    }

    setTimeFrames(newArr);
  };

  return (
    <Container>
      <User>
        <UserImage src={require("../../images/image-jeremy.png")} />
        <UserInfo>
          <Report>Report for</Report>
          <UserName>Jeremy Robson</UserName>
        </UserInfo>
      </User>
      <TimeFrames onClick={toggleActive}>{times}</TimeFrames>
    </Container>
  );
};

export default UserCard;
