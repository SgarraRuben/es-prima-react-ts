import { useAppDispatch, useAppSelector } from '@store/utility';
import { toggleTheme } from '@store/themeSlice';
import styles from './styles.module.scss';
import { Button } from 'react-bootstrap';

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={() => dispatch(toggleTheme())}
      className={styles.toggle}
    >
      {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

export default ThemeSwitcher;

