import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

interface ThemeButtonProps {
  theme: string;
  onThemeChange: () => void;
}

export function ThemeButton({ theme, onThemeChange }: ThemeButtonProps) {
  return (
    <Button
      className='absolute top-4 right-4'
      onClick={onThemeChange}
      variant='default'
      size='icon'
      aria-label='Change Theme'
    >
      {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
