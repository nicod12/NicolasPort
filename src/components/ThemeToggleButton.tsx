import Button from '@mui/material/Button';
import Brightness6Icon from '@mui/icons-material/Brightness6';


interface Props {
    onToggle: () => void;
  }
  
const ThemeToggleButton: React.FC<Props> = ({ onToggle }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onToggle}
      sx={{position: "absolute", top: "80px", right: "15px",borderRadius: "20px",padding: "4px 2px " }}
    >
      <Brightness6Icon />
    </Button>
  );
}

export default ThemeToggleButton;