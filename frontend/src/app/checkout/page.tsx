// 'use client';

// import { useCart } from '@/context/CartContext';
// import styles from './CheckoutPage.module.css';

// const CheckoutPage = () => {
//   const { cartItems } = useCart();

//   const totalAmount = cartItems.reduce((total, item) => {
//     const price = Number(item.price) || 0;
//     const quantity = Number(item.quantity) || 0;
//     return total + price * quantity;
//   }, 0);

//   if (!cartItems.length) {
//     return <h1 className={styles.emptyCart}>Корзина пуста</h1>;
//   }

//   const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     alert('Заказ успешно оформлен!');
//   };

//   return (
//     <main className={styles.checkoutPage}>
//       <h1 className={styles.title}>Оформление заказа</h1>
//       <div className={styles.cartItems}>
//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.cartItem}>
//             <div className={styles.imageWrapper}>
//               <img
//                 src={`/images/products/${item.slug}/${item.slug}.jpg`}
//                 alt={item.name}
//                 className={styles.image}
//               />
//             </div>
//             <div className={styles.details}>
//               <h2 className={styles.name}>{item.name}</h2>
//               <p className={styles.size}>Размер: {item.size}</p>
//               <p className={styles.quantity}>Количество: {item.quantity}</p>
//               <p className={styles.price}>
//                 {Number(item.price) * Number(item.quantity)} грн
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.summary}>
//         <p className={styles.total}>
//           Итоговая сумма: <span>{totalAmount} грн</span>
//         </p>
//       </div>
//       <form className={styles.form} onSubmit={handleOrderSubmit}>
//         <h2 className={styles.formTitle}>Ваши данные</h2>
//         <input
//           className={styles.input}
//           type="text"
//           name="name"
//           placeholder="Имя и фамилия"
//           required
//         />
//         <input
//           className={styles.input}
//           type="email"
//           name="email"
//           placeholder="E-mail"
//           required
//         />
//         <input
//           className={styles.input}
//           type="text"
//           name="address"
//           placeholder="Адрес доставки"
//           required
//         />
//         <button className={styles.submitButton} type="submit">
//           Оформить заказ
//         </button>
//       </form>
//     </main>
//   );
// };

// export default CheckoutPage;

'use client';

import { useCart } from '@/context/CartContext';
import styles from './CheckoutPage.module.css';
import Image from 'next/image';

const CheckoutPage = () => {
  const { cartItems, removeCartItem } = useCart();

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return total + price * quantity;
  }, 0);

  if (!cartItems.length) {
    return <h1 className={styles.emptyCart}>Корзина пуста</h1>;
  }

  const handleOrderSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const customerData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      country: formData.get('country') as string,
      address: formData.get('address') as string,
      delivery: formData.get('delivery') as string,
      payment: formData.get('payment') as string,
    };

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
      <form className={styles.form} onSubmit={handleOrderSubmit}>
        <label className={styles.label}>
          Будь ласка, введіть своє ім’я:
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ім’я"
            required
          />
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
        <button className={styles.paymentButton}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
      </form>
    </main>
  );
};

export default CheckoutPage;
