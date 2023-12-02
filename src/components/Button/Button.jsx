import css from './Button.module.css';

export const Button = ({
  title,
  type = 'button',
  onButtonClick = () => {},
  styles = '',
}) => {
  return (
    <button
      className={`${css['btn']} ${styles}`}
      type={type}
      onClick={() => onButtonClick()}
    >
      {title}
    </button>
  );
};

export default Button;
