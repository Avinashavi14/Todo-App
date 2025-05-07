// import React from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Link,
//   Container,
//   Paper,
// } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });

// function SignUp() {
//   return (
//     <Container maxWidth="sm">
//       <Paper
//         elevation={3}
//         sx={{
//           mt: 8,
//           p: 4,
//           borderRadius: 4,
//           textAlign: 'center',
//         }}
//       >
//         {/* Logo */}
//         <Box mb={3}>
//           <img
//             src="https://img.icons8.com/fluency/48/todo-list.png"
//             alt="logo"
//             width="48"
//           />
//           <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
//             MyTodoApp
//           </Typography>
//         </Box>

//         {/* Sign Up Form */}
//         <Formik
//           initialValues={{
//             email: '',
//             password: '',
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             console.log(values); // Handle form submission (e.g., API call)
//           }}
//         >
//           {({ values, handleChange, handleBlur, errors, touched }) => (
//             <Form>
//               <Field
//                 as={TextField}
//                 fullWidth
//                 margin="normal"
//                 label="Email"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 error={touched.email && !!errors.email}
//                 helperText={touched.email && errors.email}
//               />
//               <Field
//                 as={TextField}
//                 fullWidth
//                 margin="normal"
//                 label="Password"
//                 name="password"
//                 type="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 variant="outlined"
//                 error={touched.password && !!errors.password}
//                 helperText={touched.password && errors.password}
//               />
//               <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   mt: 2,
//                   bgcolor: '#DB4C3F',
//                   '&:hover': { bgcolor: '#c33c30' },
//                   textTransform: 'none',
//                   fontWeight: 600,
//                 }}
//                 type="submit"
//               >
//                 Sign Up
//               </Button>
//             </Form>
//           )}
//         </Formik>

//         <Box mt={3}>
//           <Typography variant="body2">
//             Already have an account?{' '}
//             <Link
//               component={RouterLink}
//               to="/login"
//               underline="hover"
//               sx={{ fontWeight: 500 }}
//             >
//               Login
//             </Link>
//           </Typography>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

// export default SignUp;
