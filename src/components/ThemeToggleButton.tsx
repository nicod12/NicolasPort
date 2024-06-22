import Button from '@mui/material/Button';
import Brightness6Icon from '@mui/icons-material/Brightness6';


interface Props {
    onToggle: () => void;
  }
  
const ThemeToggleButton: React.FC<Props> = ({ onToggle }) => {
  return (
    <Button
       aria-label="Change"
      onClick={onToggle}
      sx={{position: "absolute", top: "80px", right: "15px"}}
    >
      <Brightness6Icon />
    </Button>
  );
}

export default ThemeToggleButton;