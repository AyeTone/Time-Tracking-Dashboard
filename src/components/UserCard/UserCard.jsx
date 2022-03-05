import {
  Container,
  Report,
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
    </Container>
  );
};

export default UserCard;
