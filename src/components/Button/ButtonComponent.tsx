import { MouseEvent } from 'react';
import { Button, PropTypes } from '@material-ui/core';

import styles from './ButtonComponent.module.css';

interface ButtonComponentProps {
  color: PropTypes.Color | undefined;
  onClick: () => void;
  buttonText: string;
}

const ButtonComponent = ({ color, onClick, buttonText }: ButtonComponentProps) => {
  return (
    <Button
      variant='contained'
      color={color}
      className={styles.btnClass}
      size='large'
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
}

export default ButtonComponent;
