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
  return (
    <Container>
      <User>
        <UserImage src={require("../../images/image-jeremy.png")} />
        <UserInfo>
          <Report>Report for</Report>
          <UserName>Jeremy Robson</UserName>
        </UserInfo>
      </User>
      <TimeFrames>
        <Time>Daily</Time>
        <Time>Weekly</Time>
        <Time>Monthly</Time>
      </TimeFrames>
    </Container>
  );
};

export default UserCard;
