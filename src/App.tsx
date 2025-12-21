import { ThemeButton } from '@/components/ThemeButton';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeClick = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='overflow-hidden h-svh w-full relative'>
      <ThemeButton theme={theme} onThemeChange={handleThemeClick} />
    </div>
  );
}

export default App;
