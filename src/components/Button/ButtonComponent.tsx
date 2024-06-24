import styles from './ButtonComponent.module.css';

interface ButtonProps {
  onClick: () => void;
  buttonText: string;
  backgroundColor: string;
  width: string;
  height: string;
}

const ButtonComponent = ({
  onClick,
  buttonText,
  backgroundColor,
  width,
  height,
}: ButtonProps) => {
  return (
    <button
      className={styles.btnClass}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor || '',
        width: width || '',
        height: height || '',
      }}
    >{buttonText}</button>
  );
}

export default ButtonComponent;
