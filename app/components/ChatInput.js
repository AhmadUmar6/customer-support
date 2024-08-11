import { Box, TextField, IconButton, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (isLoading || !message.trim()) return;
    setIsLoading(true);
    await onSendMessage(message);
    setMessage('');
    setIsLoading(false);
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
          },
          '& .MuiOutlinedInput-input': {
            color: 'white',
            padding: '14px 20px',
          },
          '& .MuiInputPlaceholder-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        }}
      />
      <IconButton
        color="primary"
        onClick={handleSend}
        disabled={isLoading}
        sx={{
          backgroundColor: '#4caf50',
          '&:hover': {
            backgroundColor: '#45a049',
          },
          width: '50px',
          height: '50px',
        }}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
      </IconButton>
    </Box>
  );
}