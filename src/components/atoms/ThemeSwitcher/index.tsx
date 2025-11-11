import { useAppDispatch, useAppSelector } from '@store/utility';
import styles from './styles.module.scss';
import { toggleTheme } from '@store/themeSlice';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.theme_switcher_wrapper)} onClick={()=> dispatch(toggleTheme())}>
      <div className='fw-bold'>
        {t("pages.users.theme_switcher.label")} :
      </div>
      <div className={classNames(styles.theme_switcher, {
        [styles.theme_switcher_dark]: theme === "dark"
      })}>
        <div className={classNames(styles.theme_switcher_ball)}></div>
      </div>
    </div>
  );
};


export default ThemeSwitcher;

