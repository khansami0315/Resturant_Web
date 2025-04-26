import React from 'react';
import { Layout } from '../components/layouts/Layout';
import { Typography, Box, Container, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  background: 'linear-gradient(to bottom right, #f9f9f9, #ffffff)',
}));

const About = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <StyledPaper elevation={0}>
          <Box
            sx={{
              textAlign: 'center',
              mb: 4,
              '& h4': {
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 2,
                fontSize: { xs: '1.8rem', sm: '2.2rem' },
                textTransform: 'uppercase',
                letterSpacing: '1px',
              },
              '& p': {
                textAlign: 'justify',
                lineHeight: '1.8',
                color: 'text.secondary',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                mb: 3,
              },
            }}
          >
            <Typography variant="h4" component="h1">
              Welcome To Our Restaurant
            </Typography>
            
            <Divider sx={{ my: 3, mx: 'auto', width: '80px', height: '4px', bgcolor: 'primary.main' }} />
            
            <Typography paragraph>
              Welcome to our Restaurant! We offer a variety of delicious and
              freshly prepared dishes made with love and passion. Whether you're
              here for a family dinner or a quick bite, our cozy ambiance and
              excellent service will make you feel right at home.
            </Typography>
            
            <Typography paragraph>
              Our chefs use only the finest ingredients to create memorable
              dining experiences. From traditional favorites to innovative
              creations, each dish tells a story of culinary excellence.
            </Typography>
            
            <Typography paragraph>
              Founded in 2010, we've been serving the community with dedication,
              constantly evolving while staying true to our roots of quality,
              authenticity, and warm hospitality.
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </Layout>
  );
};

export default About;