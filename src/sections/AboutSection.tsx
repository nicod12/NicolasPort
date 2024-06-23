import { Box, Typography } from "@mui/material"


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
          textAlign:{
            xs: "center",
            sm: "start"
          },
          fontFamily: "poppins"
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis hic, quidem rerum sequi voluptas ex numquam consequuntur minus sit, dignissimos commodi. Molestias, pariatur nostrum! Tempore numquam impedit consequatur suscipit quidem.
      </Typography>
    </Box>
  )
}

export default AboutSection