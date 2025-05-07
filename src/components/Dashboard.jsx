import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600, color: '#007BFF', display: 'flex', alignItems: 'center' }}
          >
            <img
              src="https://img.icons8.com/fluency/48/todo-list.png"
              alt="logo"
              width="30"
              style={{ marginRight: '8px' }}
            />
            MyTodoApp
          </Typography>

          <Button
            variant="contained"
            component={RouterLink}
            to="/login"
            sx={{
              bgcolor: '#007BFF', // New color
              borderRadius: '20px',
              px: 3,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#0056b3', // New hover color
              },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mt: 12 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 600 }} gutterBottom>
              Clarity isn’t just a goal
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 18 }}>
              It’s a way of life. Join millions of people who are taking control of their time, energy, and focus with a to-do app designed to simplify tasks, boost productivity, and bring peace of mind every day
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/src/assets/image.png"
              alt="Todo App Illustration"
              sx={{ width: '100%', borderRadius: '20px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
    