import { Box, Typography } from "@mui/material"
import ButtonBaseDemo from "../components/Projects";




const ProjectSection = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingY: "40px"
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          textAlign: "center",
          marginTop: "80px",
          fontSize: {
            xs: "15px",
            sm: "20px"
          },
          fontWeight: "bold",
          fontFamily: "poppins",
          letterSpacing: "2px",
          color: "#DA6512",
          textTransform: "uppercase"
        }}
      >
        Projects
      </Typography>

      <ButtonBaseDemo />
    </Box>
  )
}

export default ProjectSection;
