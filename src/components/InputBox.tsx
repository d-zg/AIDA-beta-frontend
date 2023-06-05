import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AnimatedTextField from './AnimatedTextField';
import SubmitButton from './SubmitButton';

function InputBox() {
  const [typedText1, setTypedText1] = useState('');
  const [label1, setLabel1] = useState(false);
  const [error1, setError1] = useState(false);

  const [typedText2, setTypedText2] = useState('');
  const [label2, setLabel2] = useState(false);
  const [error2, setError2] = useState(false);

  const [typedText3, setTypedText3] = useState('');
  const [label3, setLabel3] = useState(false);
  const [error3, setError3] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  // testing purposes rn
  const onClick = () => {
    if (!error1 && !error2 && !error3) {
      setLoading(true);
      // wait one second and set loading to false
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setSubmitted(true);
      console.log(typedText1);
      console.log(typedText2);
      console.log(typedText3);
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Align items vertically
        // Align items horizontally as well
        justifyContent: 'center',
        height: '20%',
        mt: '7.5%',
      }}
    >
      <AnimatedTextField
        enabled={!submitted}
        placeholderText="Paste your story here..."
        isNumeric={false}
        label={label1}
        setLabel={setLabel1}
        typedText={typedText1}
        setTypedText={setTypedText1}
        error={error1}
        setError={setError1}
      />
      <Typography fontSize="14px">
        Answer the following questions:
      </Typography>
      <AnimatedTextField
        enabled={!submitted}
        placeholderText="How old are you?"
        isNumeric
        label={label2}
        setLabel={setLabel2}
        typedText={typedText2}
        setTypedText={setTypedText2}
        error={error2}
        setError={setError2}
      />
      <AnimatedTextField
        enabled={!submitted}
        placeholderText="How many times have you read this story?"
        isNumeric
        label={label3}
        setLabel={setLabel3}
        typedText={typedText3}
        setTypedText={setTypedText3}
        error={error3}
        setError={setError3}
      />
      <SubmitButton onClick={onClick} />
      {submitted && loading && <Typography>Loading...</Typography>}
      {submitted && !loading && <Typography>Questions will display here</Typography>}
    </Box>
  );
}

export default InputBox;
