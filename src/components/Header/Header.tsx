import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={`container ${styles.wrapper}`}>
        <h1 className="mainTitle">Мой бюджет</h1>
        <p className={styles.text}>
          Если указать свою зарплату и обязательные траты, калькулятор рассчитает ежедневный бюджет
        </p>
      </div>
    </header>
  );
};

export default Header;