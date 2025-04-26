import React from 'react';
import { Layout } from '../components/layouts/Layout';
import { MenuList } from '../data/data';
import { Box, Card, CardActionArea, CardMedia, Typography, CardContent } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, p: 3 }}>
        {
          MenuList.map((menu, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 200 }}
                  component="img"
                  image={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {menu.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
                    Price: Rs. {menu.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  );
};

export default Menu;
