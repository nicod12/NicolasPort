import { Container, Typography } from "@mui/material"



const HomeSection = () => {
  return (
    <Container 
      sx={{marginTop: "30px"}}
    >
       <Typography 
         variant="h1" 
         component="h2"
         fontSize="25px"
         textAlign="center"
         letterSpacing="1px"
         fontWeight="bold"
       >
        FullStack Developer 💻
       </Typography>
    </Container>
  )
}

export default HomeSection