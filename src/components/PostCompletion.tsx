import React, { useState } from 'react';
import { Box, Slider, TextField } from '@mui/material';

function PostCompletion() {
  const [hardness, setHardness] = useState(5);
  const [duration, setDuration] = useState(0);
  const [notes, setNotes] = useState('');

  const handleHardnessChange = (event : any, value: any) => {
    setHardness(value);
  };

  const handleDurationChange = (event : any, value : any) => {
    setDuration(value);
  };

  const handleNotesChange = (event : any) => {
    setNotes(event.target.value);
  };

  const handleInputBoxClick = () => {
    // Placeholder action for when the InputBox is clicked
    console.log('InputBox clicked');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        onClick={handleInputBoxClick}
        sx={{
          width: '200px',
          height: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          mb: '16px',
        }}
      />
      <Slider
        value={hardness}
        onChange={handleHardnessChange}
        min={0}
        max={10}
        step={1}
        sx={{ width: '300px', mb: '16px' }}
      />
      <Slider
        value={duration}
        onChange={handleDurationChange}
        min={0}
        max={24}
        step={1}
        sx={{ width: '300px', mb: '16px' }}
      />
      <TextField
        value={notes}
        onChange={handleNotesChange}
        label="Notes"
        multiline
        rows={4}
        variant="outlined"
        sx={{ width: '300px' }}
      />
    </Box>
  );
}

export default PostCompletion;
