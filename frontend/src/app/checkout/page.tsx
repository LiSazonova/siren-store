'use client';

import { useCart } from '@/context/CartContext';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return total + price * quantity;
  }, 0);

  if (!cartItems.length) {
    return <h1 className={styles.emptyCart}>Корзина пуста</h1>;
  }

  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Заказ успешно оформлен!');
  };

  return (
    <main className={styles.checkoutPage}>
      <h1 className={styles.title}>Оформление заказа</h1>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.imageWrapper}>
              <img
                src={`/images/products/${item.slug}/${item.slug}.jpg`}
                alt={item.name}
                className={styles.image}
              />
            </div>
            <div className={styles.details}>
              <h2 className={styles.name}>{item.name}</h2>
              <p className={styles.size}>Размер: {item.size}</p>
              <p className={styles.quantity}>Количество: {item.quantity}</p>
              <p className={styles.price}>
                {Number(item.price) * Number(item.quantity)} грн
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <p className={styles.total}>
          Итоговая сумма: <span>{totalAmount} грн</span>
        </p>
      </div>
      <form className={styles.form} onSubmit={handleOrderSubmit}>
        <h2 className={styles.formTitle}>Ваши данные</h2>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Имя и фамилия"
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          className={styles.input}
          type="text"
          name="address"
          placeholder="Адрес доставки"
          required
        />
        <button className={styles.submitButton} type="submit">
          Оформить заказ
        </button>
      </form>
    </main>
  );
};

export default CheckoutPage;
