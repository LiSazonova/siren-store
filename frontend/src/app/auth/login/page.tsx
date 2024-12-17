'use client';

import React, { useState, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/app/auth/Auth.module.css';
import { GoogleLogin, GoogleCredentialResponse } from '@react-oauth/google';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
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

  const handleGoogleLoginSuccess = async (
    credentialResponse: GoogleCredentialResponse
  ) => {
    await loginWithGoogle(credentialResponse);
    router.push('/');
  };

  const handleGoogleLoginError = () => {
    toast.error('Google авторизация не удалась.');
  };

  return (
    <div className={styles.authContainer}>
      <h1>Вход</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <label htmlFor="identifier">Email или Имя пользователя:</label>
        <input
          type="text"
          name="identifier"
          id="identifier"
          value={form.identifier}
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
          Войти
        </button>
      </form>

      <div className={styles.googleLogin}>
        <p>или</p>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
        />
      </div>

      <p>
        <Link href="/auth/forgot-password">Забыли пароль?</Link>
      </p>
      <p>
        Нет аккаунта? <Link href="/auth/register">Зарегистрироваться</Link>
      </p>
    </div>
  );
};

export default LoginPage;
