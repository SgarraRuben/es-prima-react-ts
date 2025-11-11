import React from 'react';
import styles from './styles.module.scss';

interface ToggleButtonProps  {
  toggleSidebar: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleSidebar }) => {
  return (
    <div className={styles['burger-button']}>
      <button
        className={`btn btn-outline-primary d-md-none`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        &#9776;
      </button>
    </div>
  );
};

export default ToggleButton;