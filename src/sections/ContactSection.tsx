import { Typography } from "@mui/material"

const ContactSection = () => {
  return (
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
      paddingY: "20px"
     }}
    >
      Contact
    </Typography>
  )
}

export default ContactSection