// 'use client';

// import React, { useState, useContext } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import styles from '@/app/auth/Auth.module.css';
// import Modal from '@/components/Modal/Modal';
// import { toast } from 'react-toastify';
// import { useAuth } from '@/context/AuthContext';

// const RegisterPage = () => {
//   const { register, login } = useAuth();

//   const { register } = useContext(AuthContext);
//   const router = useRouter();

//   const [form, setForm] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = await register(form.username, form.email, form.password);
//     if (result.success) {
//       router.push('/');
//     } else {
//       if (result.message.includes('email')) {
//         setIsModalOpen(true);
//       } else {
//         setError(result.message);
//       }
//     }
//   };

//   return (
//     <div className={styles.authContainer}>
//       <h1>Регистрация</h1>
//       {error && <p className={styles.error}>{error}</p>}
//       <form onSubmit={handleSubmit} className={styles.authForm}>
//         <label htmlFor="username">Имя пользователя:</label>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           value={form.username}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="password">Пароль:</label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" className={styles.submitButton}>
//           Зарегистрироваться
//         </button>
//       </form>
//       <p>
//         Уже есть аккаунт? <Link href="/auth/login">Войти</Link>
//       </p>

//       {/* Модальное Окно для Ошибки Регистрации */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         contentLabel="Ошибка Регистрации"
//       >
//         <h2>Ошибка Регистрации</h2>
//         <p>Эта почта уже зарегистрирована.</p>
//         <button
//           onClick={() => setIsModalOpen(false)}
//           className={styles.closeModalButton}
//         >
//           Закрыть
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default RegisterPage;

// app/auth/register/page.tsx
'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import styles from '@/app/auth/Auth.module.css';
import Modal from '@/components/Modal/Modal';

const RegisterPage = () => {
  const { register } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await register(form.username, form.email, form.password);
    if (result.success) {
      router.push('/');
    } else {
      if (result.message.includes('email')) {
        setIsModalOpen(true);
      } else {
        setError(result.message);
      }
    }
  };

  return (
    <div className={styles.authContainer}>
      <h1>Регистрация</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <label htmlFor="username">Имя пользователя:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className={styles.submitButton}>
          Зарегистрироваться
        </button>
      </form>
      <p>
        Уже есть аккаунт? <Link href="/auth/login">Войти</Link>
      </p>

      {/* Модальное окно для ошибки регистрации */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Ошибка Регистрации"
      >
        <h2>Ошибка Регистрации</h2>
        <p>Эта почта уже зарегистрирована.</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className={styles.closeModalButton}
        >
          Закрыть
        </button>
      </Modal>
    </div>
  );
};

export default RegisterPage;
