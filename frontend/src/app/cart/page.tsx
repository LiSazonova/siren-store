'use client';

import { useCart } from '@/context/CartContext';
import styles from './CartPage.module.css';

const CartPage = () => {
  const { cartItems, removeCartItem } = useCart();

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return total + price * quantity;
  }, 0);

  if (!cartItems.length) {
    return <h1>Ничего не найдено</h1>;
  }

  return (
    <main className={styles.cartPage}>
      <h1>Корзина</h1>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Товар</th>
            <th>Размер</th>
            <th>Количество</th>
            <th>Стоимость</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.size || 'N/A'}</td>
              <td>{item.quantity}</td>
              <td>
                {Number(item.price) * Number(item.quantity) || 0} грн
              </td>{' '}
              <td>
                <button onClick={() => removeCartItem(item.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Сумма заказа: {totalAmount} грн</p>
    </main>
  );
};

export default CartPage;
