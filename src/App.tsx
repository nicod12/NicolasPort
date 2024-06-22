import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import DrawerAppBar from './components/DrawerAppBar';
import { darkTheme, lightTheme } from './utils/theme';
import ThemeToggleButton from './components/ThemeToggleButton';
import HomeSection from './sections/HomeSection';
import ProjectSection from './sections/ProjectSection';




function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <DrawerAppBar />
      <main>
        <ThemeToggleButton onToggle={handleToggleTheme} />
        <HomeSection />
        <ProjectSection />
      </main>
    </ThemeProvider>
  );
}

export default App;