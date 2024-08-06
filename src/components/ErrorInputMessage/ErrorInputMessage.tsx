import styles from './ErrorInputMessage.module.css';

const ErrorInputMessage = ({ message }: { message: string }) => {
  return (
    <p className={styles.root}>
      {message}
    </p>
  );
};

export default ErrorInputMessage;