import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import CheckIcon from '@mui/icons-material/Check';

function SubmitButton({ onClick } : any) {
  return (
    <Box className="save-button" sx={{ mt: '5%', mb: '5%' }}>
      <Button onClick={onClick} variant="outlined">
        <Typography>
          Get reading questions
        </Typography>
      </Button>
    </Box>
  );
}

export default SubmitButton;
