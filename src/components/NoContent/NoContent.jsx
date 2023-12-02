import css from './NoContent.module.css';

const NoContent = ({ message }) => {
  return (
    <div className={css['content-box']}>
      <div className={css['image']}></div>
      <p className={css['text']}>{message}</p>
    </div>
  );
};

export default NoContent;
