import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import member1 from './images/member1.jpg'; // Add your image paths
import member2 from './images/member2.jpg';
import member3 from './images/member3.jpg';

const AboutUsContainer = styled('div')({
  background: 'linear-gradient(to right, #27e1fe 20%, #054e73)',
  color: 'rgb(250, 246, 246)',
  padding: '50px 0',
  textAlign: 'center',
});

const Title = styled(Typography)({
  fontSize: '3em',
  marginBottom: '20px',
});

const Description = styled(Typography)({
  fontSize: '1.2em',
  marginBottom: '50px',
});

const TeamCard = styled(Card)({
  backgroundColor: 'rgb(216, 206, 206)',
  color: 'black',
  borderRadius: '15px',
  textAlign: 'left',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer',
  width: '90%',
  height: '400px',
  maxWidth: '250px',
  margin: 'auto',
  '&:hover': {
    transform: 'translateY(-30px)',
    textDecoration: 'none',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
});

const Hexagon = styled('div')({
  width: '100px',
  height: '100px',
  margin: '0 auto 20px auto',
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Name = styled(Typography)({
  fontSize: '1.2em',
  marginBottom: '5px',
  textDecoration: 'none',
  textAlign:'center',
});

const Role = styled(Typography)({
  fontSize: '1em',
  color: '#474242',
});

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Container>
        <Title variant="h1">About Us</Title>
        <Description variant="body1">
          Welcome to Surf! Too many files? Can't find the one you are looking for? Surf is your one-stop solution to all your problems. Use, enjoy, and feel free to reach out to us.
        </Description>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <TeamCard>
              <Hexagon>
                <Image src={member1} alt="Team Member 1" />
              </Hexagon>
              <CardContent>
                <Name variant="h6">Maurya Samanta</Name>
                <Role variant="body2">Founder, Can't live without Horlicks and racing cars</Role>
              </CardContent>
            </TeamCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamCard>
              <Hexagon>
                <Image src={member2} alt="Team Member 2" />
              </Hexagon>
              <CardContent>
                <Name variant="h6">Arya Bhattacharya</Name>
                <Role variant="body2">Design Lead, May have traded people for money</Role>
              </CardContent>
            </TeamCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamCard>
              <Hexagon>
                <Image src={member3} alt="Team Member 3" />
              </Hexagon>
              <CardContent>
                <Name variant="h6">Rituraj Ray</Name>
                <Role variant="body2">Social Media and Marketing, Probably has a foot fetish</Role>
              </CardContent>
            </TeamCard>
          </Grid>
        </Grid>
      </Container>
    </AboutUsContainer>
  );
};

export default AboutUs;
