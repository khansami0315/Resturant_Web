import React from "react";
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

 const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: '#1A1A19',
        color: 'white',
        py: 2,
        mt: 3,
      }}
    >
      {/* Social Icons */}
      <Box sx={{ my:3,"& svg": {fontSize:"60px",cursor:"pointer",mr:2},

        "& svg:hover":{
            color:'goldenrod',
            transform: 'translateX(5px)',
            transition: 'all 400ms'

        }
    
       }}>
        <InstagramIcon sx={{ mx: 1 }} />
        <TwitterIcon sx={{ mx: 1 }} />
        <GitHubIcon sx={{ mx: 1 }} />
      </Box>

      {/* Footer Text */}
      <Typography
        variant="h6"
        sx={{
          "@media(max-width:600px)": {
            fontSize: "1rem",
          },
        }}
      >
        All Rights Reserved &copy; KhanInfo
      </Typography>
    </Box>
  );
};

export default Footer;
