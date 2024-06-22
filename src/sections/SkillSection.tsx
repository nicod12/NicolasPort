import { Box, Typography } from "@mui/material"

const skills = ["Html","Css","Javascript","Typescript","NextJs","Tailwind","NodeJs","MongoDB","MySQL","Express","Linux","Git"];


const SkillSection = () => {
  return (
    <Box
      component="section"
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
         Skills
        </Typography>
        <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(6, 1fr)",
          },
          gap: {
            xs: "10px",
            sm: "15px"
          },
          justifyContent: "center",
          marginTop: "20px",
          paddingX: {
            xs: "20px",
            sm: "40px"
          },
          listStyle: "none"
        }}
      >
        {skills.map((skill) => (
          <Box
            key={skill}
            component="li"
            sx={{
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              textAlign: "center",
              listStyle: "none",
              background: "#4C4B4B",
              color: "white"
            }}
          >
            {skill}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default SkillSection