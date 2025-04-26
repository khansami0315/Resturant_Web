import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Container,
  Grid,
  styled
} from "@mui/material";
import { Layout } from "../components/layouts/Layout";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const Contact = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ 
            fontWeight: 'bold', 
            mb: 3,
            color: 'primary.main',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}>
            Contact Our Restaurant
          </Typography>
          <Typography variant="subtitle1" sx={{ 
            maxWidth: '700px', 
            mx: 'auto',
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}>
            We'd love to hear from you! Whether you have questions about our menu, 
            want to make a reservation, or just want to say hello, our team is ready to assist you.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <ContactCard elevation={0}>
              <TableContainer>
                <Table aria-label="contact table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ 
                        bgcolor: 'primary.main', 
                        color: 'white',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        py: 2
                      }} align="center">
                        How to Reach Us
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ py: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <SupportAgentIcon sx={{ color: "error.main", mr: 2, fontSize: '2rem' }} />
                          <Typography variant="body1">0315-2649345 (Customer Support)</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CallIcon sx={{ color: "info.main", mr: 2, fontSize: '2rem' }} />
                          <Typography variant="body1">03152649345 (Direct Line)</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <EmailIcon sx={{ color: "success.main", mr: 2, fontSize: '2rem' }} />
                          <Typography variant="body1">Khansami0315@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <LocationOnIcon sx={{ color: "warning.main", mr: 2, fontSize: '2rem' }} />
                          <Typography variant="body1">123 Food Street, Restaurant City</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <ScheduleIcon sx={{ color: "secondary.main", mr: 2, fontSize: '2rem' }} />
                          <Typography variant="body1">Open Daily: 11:00 AM - 11:00 PM</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </ContactCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <ContactCard elevation={0} sx={{ height: '100%' }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
                Quick Contact
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                For immediate assistance during business hours, please call us directly.
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                For reservations, we recommend calling at least 24 hours in advance for weekend bookings.
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Follow us on social media for daily specials and promotions!
              </Typography>
            </ContactCard>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;