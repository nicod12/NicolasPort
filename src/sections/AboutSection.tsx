import { Box, Typography } from "@mui/material"
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';


const AboutSection = () => {
  return (
    <Box
     component="article"
     paddingY="20px"
    >
    <Typography
         variant="h2"
         component="h2"
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
          paddingY: "20px"
         }}
        >
         About Me
        </Typography>
      <Typography
        variant="h2"
        component="p"
        sx={{
          fontSize: "20px",
          paddingX:"50px",
          paddingY:"10px",
          letterSpacing: "0.5px",
          textAlign: "center",
          fontFamily: "poppins"

        }}
      >
      <AddLocationRoundedIcon sx={{color: "#EA4335", fontSize: "20px"}} /> I am from Olavarría, Buenos Aires, Argentina.
      </Typography>
      <Box
        component="p"
        sx={{
          fontSize: "20px",
          paddingX:"50px",
          paddingY:"10px",
          letterSpacing: "0.5px",
          textAlign: "center",
          fontFamily: "poppins"
        }}
      >
       In my free time, I like reading books, spending time with my family and friends, traveling, and practicing martial arts.
      </Box>
    </Box>
  )
}

export default AboutSection