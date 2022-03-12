import {
  Container,
  Report,
  Time,
  TimeFrames,
  User,
  UserImage,
  UserInfo,
  UserName,
} from "./UserCardStyles";

const UserCard = () => {
  const timeframes = [
    {
      time: "Daily",
      on: false,
    },
    {
      time: "Weekly",
      on: false,
    },
    {
      time: "Hourly",
      on: false,
    },
  ];

  let times = timeframes.map((time) => <Time> {time.time} </Time>);

  return (
    <Container>
      <User>
        <UserImage src={require("../../images/image-jeremy.png")} />
        <UserInfo>
          <Report>Report for</Report>
          <UserName>Jeremy Robson</UserName>
        </UserInfo>
      </User>
      <TimeFrames>{times}</TimeFrames>
    </Container>
  );
};

export default UserCard;
