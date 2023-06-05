import React, { useEffect } from 'react';
import { Box, TextField } from '@mui/material';

function AnimatedTextField({
  typedText, label, setLabel, error, setError, setTypedText, placeholderText, isNumeric,
} : any) {
  const typingSpeed = 15; // Adjust the typing speed as needed

  useEffect(() => {
    let timeoutId : any;

    const typeText = (text : any, currentIndex : any) => {
      if (currentIndex < text.length) {
        setTypedText(text.substring(0, currentIndex + 1));
        timeoutId = setTimeout(() => {
          typeText(text, currentIndex + 1);
        }, typingSpeed);
      }
    };

    typeText(placeholderText, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleInputChange = (event : any) => {
    setTypedText(event.target.value);
    setError(!event.target.value.match(/^\d*$/) && isNumeric);
  };

  const handleInputFocus = () => {
    if (typedText === placeholderText) {
      setTypedText('');
      setLabel(true);
    }
  };

  return (
    <Box className="animated-text-field" sx={{ mt: '5%', mb: '5%' }}>
      <TextField
        label={label ? placeholderText : ''}
        variant="standard"
        InputLabelProps={{ shrink: true }}
        value={typedText}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        error={error}
        helperText={error ? 'Input must be numeric' : ''}
        sx={{
          width: '750px',
        }}
      />
    </Box>
  );
}

export default AnimatedTextField;
