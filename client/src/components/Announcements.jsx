import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
height: 30px;
background-color: #000f89;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

const Announcements = () => {
  return (
  <Container>
      Super Deal! Free shipping orders for items over Ksh 500
  </Container>
  );
  }
export default Announcements;