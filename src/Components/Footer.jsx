import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#dddddd',
        padding: '1rem',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        boxShadow:'0 -2px 5px #aaa'
      }}
    >
      <Container>
        <Typography variant="" color="textSecondary">
          | All Rights Reserved | Copyright &copy; CDAC Delhi
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
