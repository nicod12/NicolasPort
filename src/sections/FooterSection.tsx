import { Box, Button, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterSection = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/nicod12', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/nicol%C3%A1s-dume/', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/channel/UC6hLe4AWvESBgiJbt7Yv-IQ', '_blank');
  };

  return (
    <Box
      component="footer"
    >
      <Box
        component="div"
        sx={{
          paddingY: "10px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: "20px"
        }}
      >
      <Button
        onClick={handleGitHubClick}
        aria-label="github"
      >
        <GitHubIcon/>
      </Button>
      <Button
       onClick={handleLinkedInClick}
       aria-label="linkedin"
      >
        <LinkedInIcon />
      </Button>
      <Button
        onClick={handleYouTubeClick}
        aria-label="youtube"
      >
        <YouTubeIcon / >
      </Button>
      </Box>
      <Box
        component="p"
        sx={{
          textAlign: "center",
          paddingY: "5px",
          fontSize: "20px"
        }}
      >
        Developed by: <Typography component="span" color="orange" sx={{fontSize:"20px"}}>@nsensedev</Typography>
      </Box>
    </Box>
  )
 }

export default FooterSection