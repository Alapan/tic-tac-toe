import styles from './ButtonComponent.module.css';

interface ButtonProps {
  onClick: () => void;
  buttonText: string;
}

const ButtonComponent = ({ onClick, buttonText }: ButtonProps) => {
  return (
    <button
      className={styles.btnClass}
      onClick={onClick}
    >{buttonText}</button>
  );
}

export default ButtonComponent;
