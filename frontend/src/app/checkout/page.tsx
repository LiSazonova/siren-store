'use client';

import { useCart } from '@/context/CartContext';
import styles from './CheckoutPage.module.css';
import Image from 'next/image';
import { useState } from 'react';

const CheckoutPage = () => {
  const { cartItems, removeCartItem } = useCart();

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    country: '',
    address: '',
    delivery: '',
    payment: '',
  });

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return total + price * quantity;
  }, 0);

  if (!cartItems.length) {
    return <h1 className={styles.emptyCart}>Корзина пуста</h1>;
  }

  const validateForm = (customerData: {
    name: string;
    email: string;
    country: string;
    address: string;
    delivery: string;
    payment: string;
  }) => {
    const newErrors = {
      name: customerData.name ? '' : 'Будь ласка, введіть своє ім’я.',
      email: customerData.email
        ? ''
        : 'Будь ласка, введіть свою електронну адресу.',
      country: customerData.country ? '' : 'Будь ласка, введіть свою країну.',
      address: customerData.address ? '' : 'Будь ласка, введіть свою адресу.',
      delivery: customerData.delivery
        ? ''
        : 'Будь ласка, виберіть спосіб доставки.',
      payment: customerData.payment
        ? ''
        : 'Будь ласка, виберіть спосіб оплати.',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const handleOrderSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const form = document.querySelector('form');
    if (!form) return;

    const formData = new FormData(form);
    const customerData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      country: formData.get('country') as string,
      address: formData.get('address') as string,
      delivery: formData.get('delivery') as string,
      payment: formData.get('payment') as string,
    };

    if (!validateForm(customerData)) {
      return;
    }

    try {
      const response = await fetch('/api/create-wayforpay-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          customer: customerData,
        }),
      });

      const data = await response.json();

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl; // Переход на страницу оплаты
      } else {
        alert('Ошибка при создании платежа. Попробуйте снова.');
      }
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Произошла ошибка. Попробуйте позже.');
    }
  };

  return (
    <main className={styles.checkoutPage}>
      <h1 className={styles.title}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</h1>
      <form className={styles.form}>
        <label className={styles.label}>
          Будь ласка, введіть своє ім’я:
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ім’я"
            required
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>
        <label className={styles.label}>
          Будь ласка, введіть свою електронну адресу:
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Електронна адреса"
            required
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>
        <label className={styles.label}>
          Будь ласка, введіть свою країну:
          <input
            className={styles.input}
            type="text"
            name="country"
            placeholder="Країна"
            required
          />
          {errors.country && (
            <span className={styles.error}>{errors.country}</span>
          )}
        </label>
        <label className={styles.label}>
          Будь ласка, введіть свою адресу:
          <input
            className={styles.input}
            type="text"
            name="address"
            placeholder="Адреса"
            required
          />
          {errors.address && (
            <span className={styles.error}>{errors.address}</span>
          )}
        </label>

        <h2 className={styles.delivery}>Доставка:</h2>
        <label className={styles.deliveryOption}>
          <input
            className={styles.deliveryInput}
            type="radio"
            name="delivery"
            value="ukraine"
          />
          По Україні
        </label>
        <label className={styles.deliveryOption}>
          <input
            className={styles.deliveryInput}
            type="radio"
            name="delivery"
            value="world"
          />
          По Світy
        </label>
        {errors.delivery && (
          <span className={styles.error}>{errors.delivery}</span>
        )}

        <h2 className={styles.payment}>Оплата:</h2>
        <label className={styles.paymentOption}>
          <input
            className={styles.paymentInput}
            type="radio"
            name="payment"
            value="credit-card"
          />
          Кредитна карта
        </label>
        <label className={styles.paymentOption}>
          <input
            className={styles.paymentInput}
            type="radio"
            name="payment"
            value="cash-on-delivery"
          />
          Накладний платіж (тільки Україна)
        </label>
        <label className={styles.paymentOption}>
          <input
            className={styles.paymentInput}
            type="radio"
            name="payment"
            value="paypal"
          />
          PayPal
        </label>
        {errors.payment && (
          <span className={styles.error}>{errors.payment}</span>
        )}

        <div className={styles.cartItems}>
          <div className={styles.header}>
            <div className={styles.titleOrder}>НАЙМЕНУВАННЯ</div>
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
                  <div className={styles.imageWrapper}>
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
                  <select
                    className={styles.sizeSelector}
                    defaultValue={item.size}
                  >
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
        </div>
        <div className={styles.totalSection}>
          <span className={styles.totalLabel}>СУММА ЗАМОВЛЕННЯ:</span>
          <span className={styles.totalAmount}>{totalAmount} грн</span>
        </div>
        <button
          className={styles.paymentButton}
          type="button"
          onClick={handleOrderSubmit}
        >
          ОФОРМИТИ ЗАМОВЛЕННЯ
        </button>
      </form>
    </main>
  );
};

export default CheckoutPage;
