import React from 'react';
import styles from './AboutPage.module.css';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>ПРО НАС</h1>
        <div className={styles.aboutContent}>
          <Image
            src="/images/about_foto.jpg"
            alt="О нас"
            width={320}
            height={482}
            className={styles.aboutImage}
          />
          <div className={styles.textSection}>
            <p className={styles.aboutText}>
              Siren — це динамічний модний бренд, який поєднує в собі сміливу
              елегантність із яскравим почуттям індивідуальності. Черпаючи
              натхнення в привабливості та силі міфічної сирени, бренд створює
              предмети, які настільки ж захоплюють, як і надають сили. Кожна
              колекція від The ​​Siren Official відображає унікальне поєднання
              сучасного дизайну з позачасовими, ефірними елементами, створюючи
              гардероб, який звертається до сучасної жінки, яка не боїться
              робити заяву.
            </p>
            <p className={styles.aboutText}>
              Сирена підкреслює важливість охоплення внутрішньої сили та
              вираження її через моду. З акцентом на вражаючих силуетах,
              розкішних тканинах і ретельно опрацьованих деталях, бренд пропонує
              більше, ніж просто одяг — він пропонує спосіб заявити про себе.
              Твори розроблені, щоб випромінювати впевненість, вишуканість і
              невибачливе ставлення. Незалежно від того, чи шукаєте ви сміливе
              вбрання для особливої ​​події чи культовий предмет для
              повсякденної колекції, The Siren гарантує, що кожен одяг, який ви
              носите, відобразить суть розширення можливостей та елегантності.
            </p>
            <p className={styles.aboutText}>
              Заснована з місією переосмислити сучасну жіночність, The Siren
              присвячена створенню моди, яка резонує з жінками, які керують як
              стилем, так і змістом. Прихильність бренду до якості та інновацій
              помітна в кожному виробі, що робить його найкращим вибором для
              тих, хто цінує розкіш, оригінальність і силу самовираження.
            </p>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image
            src="/images/decorations/siren_2.svg"
            alt="Siren"
            width={184}
            height={253}
            className={styles.sirenIllustration}
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
