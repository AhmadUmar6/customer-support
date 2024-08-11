'use client';
import { Box, Button, Typography, Card, CardContent, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import Spline from '@splinetool/react-spline/next';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Custom theme for Comic Sans font
const theme = createTheme({
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      color: '#ffffff',
      textShadow: '4px 4px 8px rgba(0,0,0,0.4)',
    },
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

export default function LandingPage() {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          background: 'linear-gradient(135deg, #6DD5FA 0%, #2980B9 100%)', 
          overflow: 'hidden'
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            >
              <Card 
                sx={{ 
                  padding: 4, 
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)', 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  borderRadius: '20px',
                  backdropFilter: 'blur(15px)'
                }}
              >
                <CardContent>
                  <Typography variant="h1" align="center" gutterBottom>
                    AI Customer Support
                  </Typography>
                  <Typography variant="h5" align="center" gutterBottom>
                    Welcome to Our App
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ 
                      mt: 3, 
                      mb: 2, 
                      backgroundColor: '#ffffff', 
                      color: '#FF6F61',
                      '&:hover': {
                        backgroundColor: '#FFD1D1',
                      },
                    }}
                    onClick={() => router.push('/login')}
                  >
                    LOGIN
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{
                      borderColor: '#ffffff',
                      color: '#ffffff',
                      '&:hover': {
                        borderColor: '#FFD1D1',
                        color: '#FFD1D1',
                      },
                    }}
                    onClick={() => router.push('/signup')}
                  >
                    SIGN UP
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 60, delay: 0.4 }}
            >
              <Box sx={{ maxWidth: 600, margin: 'auto', borderRadius: '20px', overflow: 'hidden' }}>
                <Spline
                  scene="https://prod.spline.design/E92UC3yGkIMVjzNL/scene.splinecode"
                  style={{ width: '100%', height: '600px', background: 'transparent' }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
