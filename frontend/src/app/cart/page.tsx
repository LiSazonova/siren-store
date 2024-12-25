'use client';

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import styles from './CartPage.module.css';
import Image from 'next/image';

const CartPage = () => {
  const { cartItems, removeCartItem } = useCart();
  const router = useRouter();

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return total + price * quantity;
  }, 0);

  const handleNavigateToProduct = (slug: string) => {
    router.push(`/products/${slug}`);
  };

  const handleCheckout = () => {
    router.push('/checkout'); // Переход на страницу оформления заказа
  };

  if (!cartItems.length) {
    return <h1 className={styles.emptyCart}>Ничего не найдено</h1>;
  }

  return (
    <main className={styles.cartPage}>
      <div className={styles.header}>
        <div className={styles.title}>НАЙМЕНУВАННЯ</div>
        <div className={styles.size}>РОЗМІР</div>
        <div className={styles.quantity}>КІЛЬКІСТЬ</div>
        <div className={styles.price}>ВАРТІСТЬ</div>
      </div>

      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            {/* Левая колонка */}
            <div className={styles.leftColumn}>
              <h2 className={styles.name}>{item.name}</h2>
              <div
                className={styles.imageWrapper}
                onClick={() => handleNavigateToProduct(item.slug)}
              >
                <Image
                  src={`/images/products/${item.slug}/${item.slug}.jpg`}
                  alt={item.name}
                  width={188}
                  height={240}
                  className={styles.image}
                />
              </div>
            </div>

            {/* Правая колонка */}
            <div className={styles.rightColumn}>
              <button
                className={styles.removeButton}
                onClick={() => removeCartItem(item.id)}
              >
                ✕
              </button>
              <select className={styles.sizeSelector} defaultValue={item.size}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <input
                className={styles.quantityInput}
                type="number"
                defaultValue={item.quantity}
                min="1"
              />
              <p className={styles.price}>
                {Number(item.price) * Number(item.quantity)} грн
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.totalSection}>
        <span className={styles.totalLabel}>СУММА ЗАМОВЛЕННЯ:</span>
        <span className={styles.totalAmount}>{totalAmount} грн</span>
      </div>
      <button className={styles.checkoutButton} onClick={handleCheckout}>
        ОФОРМИТЬ ЗАМОВЛЕННЯ
      </button>
    </main>
  );
};

export default CartPage;
