import { Container, Typography } from "@mui/material"
import ButtonBaseDemo from "../components/Projects";




const ProjectSection = () => {
  return (
    <Container
    sx={{
      paddingY: "40px"
    }}
    >
        <Typography
         variant="h2"
         component="h2"
         sx={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: {
            xs: "20px",
            sm: "25px"
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
    </Container>
  )
}

export default ProjectSection;