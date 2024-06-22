import { Container, Typography } from "@mui/material"



const HomeSection = () => {
  return (
    <Container 
      sx={{marginTop: "40px", position:"relative"}}
      component="section"
    >
       <Typography 
         variant="h1" 
         component="h2"
         fontSize="30px"
         textAlign="center"
         letterSpacing="1px"
         fontWeight="bold"
         color="orange"
       >
        FullStack Developer 💻
       </Typography>

       <Typography 
        variant="h2"
        component="p"
        sx={{
          fontSize: "25px",
          textAlign: "start",
          marginTop: "20px",
          paddingY: "10px",
          fontFamily: "poppins"
        }}
       >
          Me llamo Nicolás. Soy desarrollador de sitios y aplicaciones web, 
          con 2 años de experiencia desarrollando en 
          <Typography component="span" color="#DA6512" fontWeight="bold" fontSize="25px" fontFamily="poppins"> React</Typography> y <Typography component="span" color="#DA6512" fontWeight="bold" fontSize="25px"  fontFamily="poppins">Node.js</Typography>
       </Typography>
    </Container>
  )
}

export default HomeSection