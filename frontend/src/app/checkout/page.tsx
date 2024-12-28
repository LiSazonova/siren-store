'use client';

import { useCart } from '@/context/CartContext';
import styles from './CheckoutPage.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
  const { cartItems, removeCartItem, updateCartItem } = useCart();

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    delivery: '',
    payment: '',
  });

  const [localCartItems, setLocalCartItems] = useState(cartItems);

  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);

  const totalAmount = localCartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return total + price * quantity;
  }, 0);

  if (!localCartItems.length) {
    return <h1 className={styles.emptyCart}>Корзина пуста</h1>;
  }

  const validateForm = (customerData: {
    name: string;
    email: string;
    phone: string;
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
      phone: customerData.phone
        ? ''
        : 'Будь ласка, введіть свій номер телефону.',
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

  // const handleOrderSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   const form = document.querySelector('form');
  //   if (!form) return;

  //   const formData = new FormData(form);
  //   const customerData = {
  //     name: formData.get('name') as string,
  //     email: formData.get('email') as string,
  //     phone: formData.get('phone') as string,
  //     country: formData.get('country') as string,
  //     address: formData.get('address') as string,
  //     delivery: formData.get('delivery') as string,
  //     payment: formData.get('payment') as string,
  //   };

  //   if (!validateForm(customerData)) {
  //     return;
  //   }

  //   try {
  //     const response = await fetch('/api/create-wayforpay-payment', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         cartItems: localCartItems,
  //         totalAmount,
  //         customer: customerData,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data.paymentUrl) {
  //       window.location.href = data.paymentUrl; // Переход на страницу оплаты
  //     } else {
  //       alert('Ошибка при создании платежа. Попробуйте снова.');
  //     }
  //   } catch (error) {
  //     console.error('Error creating payment:', error);
  //     alert('Произошла ошибка. Попробуйте позже.');
  //   }
  // };

  const handleSendOrder = async () => {
    const form = document.querySelector('form');
    if (!form) {
      toast.error('Не удалось найти форму.');
      return;
    }

    const formData = new FormData(form); // Создаем объект FormData из формы
    const customerData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      country: formData.get('country') as string,
      delivery: formData.get('delivery') as string,
      payment: formData.get('payment') as string,
      address: formData.get('address') as string,
    };

    // Проверка на заполнение всех полей
    if (!validateForm(customerData)) {
      toast.error('Будь ласка, заповніть усі обов’язкові поля.');
      return;
    }

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems: localCartItems,
          totalAmount,
          customer: customerData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          'Ваше замовлення успішно відправлено! Ми зв’яжемося з вами для підтвердження.'
        );
      } else {
        toast.error('Помилка під час відправки замовлення: ' + data.message);
      }
    } catch (error) {
      console.error('Error sending order:', error);
      toast.error('Виникла помилка. Спробуйте пізніше.');
    }
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedItems = localCartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setLocalCartItems(updatedItems);
    updateCartItem(id, quantity);
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
          Будь ласка, введіть свій номер телефону:
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            required
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
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
            {localCartItems.map((item) => (
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
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
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
        {/* <button
          className={styles.paymentButton}
          type="button"
          onClick={handleOrderSubmit}
        >
          ОФОРМИТИ ЗАМОВЛЕННЯ
        </button> */}
        <button
          className={styles.sendOrderButton}
          type="button"
          onClick={handleSendOrder}
        >
          ВІДПРАВИТИ ЗАМОВЛЕННЯ
        </button>
      </form>
    </main>
  );
};

export default CheckoutPage;
