import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={`container ${styles.wrapper}`}>
        <h1>Мой бюджет</h1>
        <p>
          Если указать свою зарплату и обязательные траты, калькулятор
          рассчитает ежедневный бюджет.
        </p>
      </div>
    </header>
  );
};

export default Header;