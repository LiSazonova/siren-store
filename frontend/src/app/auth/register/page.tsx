'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import styles from './RegistrPage.module.css';
import Modal from '@/components/Modal/Modal';
import Image from 'next/image';

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
    console.log('Данные для отправки:', form);

    try {
      const result = await register(form.username, form.email, form.password);

      console.log('Результат регистрации:', result);

      if (result.success) {
        console.log('Перенаправление на главную'); // Лог перед переходом
        router.push('/');
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      setError('Ошибка регистрации. Попробуйте позже.');
    }
  };

  return (
    <section className={styles.auth}>
      <div className={styles.authContainer}>
        <div className={styles.authDecoration}>
          <Image
            src="/images/decorations/registr_siren.svg"
            width={583}
            height={321}
            alt="Login Decoration"
          />
        </div>
        <div>
          <h1 className={styles.authTitle}>РЕЄСТРАЦІЯ</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit} className={styles.authForm}>
            <label htmlFor="username">Будь ласка, введіть своє ім'я</label>
            <input
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Ім'я"
              required
            />
            <label htmlFor="email">
              Будь ласка, введіть свою електронну адресу
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Електронна адреса"
              required
            />
            <label htmlFor="password">Будь ласка, введіть свій пароль</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Пароль"
              required
            />
            {/* <label htmlFor="birthdate">
              Будь ласка, введіть свою дату народження
            </label>
            <input
              type="text"
              name="birthdate"
              id="birthdate"
              value={form.birthdate}
              onChange={handleChange}
              placeholder="Дата народження"
              pattern="\d{2}\.\d{2}\.\d{4}" // Шаблон валидации даты
              title="Введите дату в формате ДД.ММ.РРРР" // Подсказка
              required
            /> */}
            <button type="submit" className={styles.submitButton}>
              Зареєструватися
            </button>
          </form>
          <p className={styles.authLink}>
            <Link href="/auth/login">У МЕНЕ ВЖЕ Є ПРОФІЛЬ</Link>
          </p>
        </div>

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
    </section>
  );
};

export default RegisterPage;
