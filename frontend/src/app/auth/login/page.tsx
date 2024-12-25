'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import styles from '@/app/auth/login/LoginPage.module.css';
import Image from 'next/image';

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    identifier: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(form.identifier, form.password);
    if (success) {
      router.push('/');
    } else {
      setError('Ошибка входа. Проверьте данные и попробуйте снова.');
    }
  };

  return (
    <section className={styles.auth}>
      <div className={styles.authContainer}>
        <div className={styles.authDecoration}>
          <Image
            src="/images/decorations/login_siren.svg"
            width={583}
            height={321}
            alt="Login Decoration"
          />
        </div>
        <div>
          <h1 className={styles.authTitle}>ВХІД</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit} className={styles.authForm}>
            <label htmlFor="identifier">
              Будь ласка, введіть свою електронну адресу
            </label>
            <input
              type="text"
              name="identifier"
              id="identifier"
              placeholder="Електронна адреса"
              value={form.identifier}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Будь ласка, введіть свій пароль</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              value={form.password}
              onChange={handleChange}
              required
            />

            <p className={styles.forgotPassword}>
              {/* <Link href="/auth/forgot-password">Забули пароль ?</Link> */}
            </p>

            <button type="submit" className={styles.submitButton}>
              УВІЙТИ
            </button>
          </form>

          {/* <div className={styles.googleLogin}>
            <p>или</p>
            {/* <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          /> */}
          {/* </div> */}

          <p>
            Нет аккаунта? <Link href="/auth/register">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
