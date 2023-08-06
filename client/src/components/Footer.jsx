import { EmailTwoTone, Facebook, Instagram, LocationCity, PhoneAndroidTwoTone, Pinterest, Telegram, Twitter } from '@material-ui/icons';
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOE MANIA.</Logo>
        <Desc>SHOE MANIA is a commercial center for both Shoe lovers and Shoe makers. Its a platform to value and appreciate the best of shoe quality from around the globe. <br /> 'Art is Explosive' by Deidara.</Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
          <SocialIcon color='3B5999'>
            <Telegram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            {/* <ListItem>Drawings</ListItem>
                        <ListItem>Paintings</ListItem>
                        <ListItem>Sculptures</ListItem> */}
            <ListItem>Tools</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wish List</ListItem>
            <ListItem>Terms and Conditions</ListItem>

          </List>
        </Title>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><LocationCity style={{ marginRight: "10px" }} /> Sunpark, Malindi 80600</ContactItem>
        <ContactItem><PhoneAndroidTwoTone style={{ marginRight: "10px" }} /> +254771781641</ContactItem>
        <ContactItem><EmailTwoTone style={{ marginRight: "10px" }} /> emmanuel04cheruiyot@gmail.com</ContactItem>
        <ContactItem>
          <Payment src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1200px-M-PESA_LOGO-01.svg.png    " />
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;
