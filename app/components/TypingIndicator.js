import React from 'react';
import { Box, keyframes } from '@mui/material';

const ellipsis = keyframes`
  0% { content: '.'; }
  33% { content: '..'; }
  66% { content: '...'; }
`;

export default function TypingIndicator() {
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      <Box
        bgcolor="rgba(0, 123, 255, 0.1)"
        color="white"
        borderRadius="20px"
        p={1}
        pl={2}
        pr={2}
        display="flex"
        alignItems="center"
        gap={1}
        sx={{
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 123, 255, 0.3)',
        }}
      >
        <span>Typing</span>
        <Box
          component="span"
          sx={{
            '&::after': {
              content: "'.'",
              animation: `${ellipsis} 1s infinite`,
              display: 'inline-block',
              width: '1em',
              textAlign: 'left',
            },
          }}
        />
      </Box>
    </Box>
  );
}