import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  AppBar,
  Toolbar,
  Paper,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const handleAddOrUpdateTask = () => {
    if (!input.trim()) return;

    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = input;
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, input]);
    }

    setInput('');
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1400&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        p: 0,
        m: 0,
      }}
    >
      {/* Top AppBar */}
      <AppBar position="static" sx={{ bgcolor: '#007BFF' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <img
              src="https://img.icons8.com/fluency/48/todo-list.png"
              alt="logo"
              width="36"
            />
            <Typography variant="h6" fontWeight={600}>
              MyTodoApp
            </Typography>
          </Box>
          <Button
            onClick={handleLogout}
            sx={{ color: '#fff', textTransform: 'none', fontWeight: 600 }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h5" fontWeight={700} mb={3} textAlign="center">
            Manage Your Tasks
          </Typography>

          <Box display="flex" gap={2} mb={3}>
            <TextField
              fullWidth
              label="Enter a task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: '#007BFF', // New color
                fontWeight: 600,
                px: 3,
                '&:hover': { bgcolor: '#0056b3' }, // New hover color
              }}
              onClick={handleAddOrUpdateTask}
            >
              {editingIndex !== null ? 'Update' : 'Add'}
            </Button>
          </Box>

          {/* Task List */}
          {tasks.length > 0 ? (
            <List>
              {tasks.map((task, index) => (
                <ListItem
                  key={index}
                  divider
                  sx={{
                    bgcolor: '#f7f7f7',
                    borderRadius: 2,
                    mb: 1,
                    px: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <ListItemText
                    primary={task}
                    primaryTypographyProps={{ fontSize: 16 }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => handleEdit(index)} color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(index)} color="error">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography
              variant="body2"
              textAlign="center"
              color="text.secondary"
              mt={2}
            >
              No tasks added yet.
            </Typography>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;
