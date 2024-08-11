'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Typography, Snackbar, IconButton, InputAdornment, CircularProgress, Card, CardContent, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme for Comic Sans font
const theme = createTheme({
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    h5: {
      fontSize: '1.5rem',
      color: '#E0E0E0',
      textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
    },
  },
  palette: {
    primary: {
      main: '#FF6F61',
    },
    secondary: {
      main: '#FF9A8B',
    },
  },
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSnackbarOpen(true);
      setTimeout(() => {
        router.push('/chat');
      }, 2000);
    } catch (error) {
      console.error('Login error:', error.message);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          background: 'linear-gradient(135deg, #6DD5FA 0%, #2980B9 100%)',
        }}
      >
        <Card 
          sx={{ 
            width: '100%', 
            maxWidth: 400, 
            backgroundColor: 'rgba(255, 255, 255, 0.15)', 
            borderRadius: '20px', 
            backdropFilter: 'blur(15px)', 
            padding: 2 
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
            🚀 Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ 
                  mt: 3, 
                  mb: 2, 
                  backgroundColor: '#ffffff', 
                  color: '#FF6F61', 
                  '&:hover': { backgroundColor: '#FFD1D1' } 
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Login '}
              </Button>
              <Typography variant="body2" align="center">
                Don't have an account?{' '}
                <Button color="primary" onClick={() => router.push('/signup')}>
                  Sign Up
                </Button>
              </Typography>
            </form>
          </CardContent>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message="Login successful! Redirecting..."
          />
        </Card>
      </Box>
    </ThemeProvider>
  );
}
