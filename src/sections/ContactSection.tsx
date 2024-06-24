import { Box, Button, Input, Typography } from "@mui/material";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { useRef, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ContactSection = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue !== undefined) {
      navigator.clipboard.writeText(inputValue).then(() => {
        setOpen(true);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }

  const handleClose = (reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        paddingY: "20px"
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: {
            xs: "15px",
            sm: "20px"
          },
          fontWeight: "bold",
          fontFamily: "poppins",
          letterSpacing: "2px",
          color: "#DA6512",
          textTransform: "uppercase",
        }}
      >
        Contact
      </Typography>
      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: "20px"
        }}
      >
        <Input
          value="nicodume45@gmail.com"
          readOnly
          sx={{ paddingX: '4px' }}
          inputRef={inputRef}
        />
        <Button aria-label="copy" onClick={handleCopy}>
          <ContentCopyRoundedIcon />
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => handleClose()}>
          <Alert onClose={() => handleClose()} severity="success" sx={{ width: '100%' }}>
            Text copied to clipboard
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default ContactSection;
