// 'use client';

// import React, { useState } from 'react';
// import api from '@/lib/api';
// import { toast } from 'react-toastify';
// import Link from 'next/link';
// import styles from '@/app/auth/Auth.module.css';

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');
//   const [isSent, setIsSent] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await api.post('/api/auth/forgot-password', { email });
//       setIsSent(true);
//       toast.success('Проверьте свою почту для сброса пароля.');
//     } catch (err: any) {
//       console.error('Ошибка при сбросе пароля:', err);
//       setError('Пользователь с такой почтой не найден.');
//     }
//   };

//   return (
//     <div className={styles.authContainer}>
//       {!isSent ? (
//         <>
//           <h1>Забыли пароль?</h1>
//           {error && <p className={styles.error}>{error}</p>}
//           <form onSubmit={handleSubmit} className={styles.authForm}>
//             <label htmlFor="email">Введите ваш Email:</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <button type="submit" className={styles.submitButton}>
//               Отправить
//             </button>
//           </form>
//           <p>
//             <Link href="/auth/register">У меня нет профиля</Link>
//           </p>
//         </>
//       ) : (
//         <>
//           <h1>Проверьте почту</h1>
//           <p>Инструкции по сбросу пароля отправлены на ваш Email.</p>
//           <p>
//             <Link href="/auth/login">Вернуться на страницу входа</Link>
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default ForgotPasswordPage;

// app/auth/forgot-password/page.tsx
'use client';

import React, { useState } from 'react';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import Link from 'next/link';
import styles from '@/app/auth/Auth.module.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/api/auth/forgot-password', { email });
      setIsSent(true);
      toast.success('Проверьте свою почту для сброса пароля.');
    } catch (err: any) {
      console.error('Ошибка при сбросе пароля:', err);
      setError('Пользователь с такой почтой не найден.');
    }
  };

  return (
    <div className={styles.authContainer}>
      {!isSent ? (
        <>
          <h1>Забыли пароль?</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit} className={styles.authForm}>
            <label htmlFor="email">Введите ваш Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className={styles.submitButton}>
              Отправить
            </button>
          </form>
          <p>
            <Link href="/auth/register">У меня нет профиля</Link>
          </p>
        </>
      ) : (
        <>
          <h1>Проверьте почту</h1>
          <p>Инструкции по сбросу пароля отправлены на ваш Email.</p>
          <p>
            <Link href="/auth/login">Вернуться на страницу входа</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
