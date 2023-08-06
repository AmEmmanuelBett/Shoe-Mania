import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)), 
    url("https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
 center;
background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const Wrapper = styled.div`
width: 25%;z
padding: 20px;
background-color: white;

`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.div`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;

`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;

const Link = styled.a`
margin: 5px 0px;
font-size: 12;
text-decoration: underline;
cursor: pointer;
`;
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN TO ACCOUNT</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="Password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
                    <Link>ARE YOU NEW? CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
