'use client';

import styles from './SuccessPage.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Можно добавить дополнительные действия, например, очистку корзины или аналитику.
    console.log('Payment successful!');
  }, []);

  const handleGoHome = () => {
    router.push('/'); // Переход на главную страницу
  };

  return (
    <main className={styles.successPage}>
      <h1 className={styles.title}>Оплата прошла успешно!</h1>
      <p className={styles.message}>
        Спасибо за ваш заказ! Мы свяжемся с вами для подтверждения деталей
        доставки.
      </p>
      <button className={styles.homeButton} onClick={handleGoHome}>
        Вернуться на главную
      </button>
    </main>
  );
};

export default SuccessPage;
