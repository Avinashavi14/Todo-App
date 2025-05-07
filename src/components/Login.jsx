import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      navigate('/home');
      console.log('Logging in:', values);
    },
  });

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1400&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <Box mb={3} textAlign="center">
            <img
              src="https://img.icons8.com/fluency/48/todo-list.png"
              alt="logo"
              width="50"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
              MyTodoApp
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Welcome back! Please log in to manage your tasks.
            </Typography>
          </Box>

          <Box component="form" onSubmit={formik.handleSubmit} noValidate autoComplete="off">
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Box textAlign="right" mt={1}>
              <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                Forgot Password?
              </Typography>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: '#007BFF', // New color
                '&:hover': { bgcolor: '#0056b3' }, // New hover color
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Log In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
