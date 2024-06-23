import { Box, Button, Typography } from "@mui/material"



const HomeSection = () => {
  return (
    <Box
      sx={{marginTop: "50px", position:"relative", paddingY: "20px"}}
      component="section"
    >
       <Typography
         variant="h1"
         component="h2"
        sx = {{
          textAlign: "center",
          letterSpacing:"2px",
          fontWeight: "bold",
          color: "orange",
          fontSize: {
            xs: "25px",
            sm: "30px"
          },
        }}

       >
        FullStack Developer 💻
       </Typography>

       <Typography
        variant="h2"
        component="p"
        sx={{
          fontSize: "20px",
          textAlign: "center",
          marginTop: "20px",
          paddingY: "10px",
          paddingX: {
            xs: "10px",
            sm: "20px"
          },
          fontFamily: "poppins",
          letterSpacing:"2px"

        }}
       >
          My name is Nicolás. I am a web developer
          with 2 years of experience developing in
          <Typography
            component="span"
            sx = {{
              color: "#DA6512",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "poppins",
              letterSpacing:"2px"

            }}
          > React</Typography> and <Typography component="span"    sx = {{
            color: "#DA6512",
            fontWeight: "bold",
            fontSize: "20px",
            fontFamily: "poppins",
            letterSpacing:"2px"

          }}>Node.js</Typography>
       </Typography>
      <Box
        component="section"
        sx={{
          display: "flex",
        }}
      >
        <Button
          aria-label="DownloadCv"
          variant="contained"

          sx={{
            paddingX: "2px 3px",
            background:"#1287DA",
            margin: "0px auto",
            borderRadius: "5px",
            color:"white"
          }}
        >
          View CV
        </Button>
      </Box>
    </Box>
  )
}

export default HomeSection;