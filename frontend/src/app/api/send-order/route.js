import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { cartItems, totalAmount, customer } = await req.json();

        // Настройка SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true для SSL, false для TLS
            auth: {
                user: process.env.EMAIL_USER, // Почта, с которой отправляются письма
                pass: process.env.EMAIL_PASSWORD, // Пароль приложения
            },
        });

        // Формирование текста письма
        const emailContent = `
          <h1>Новый заказ</h1>
          <p><strong>Имя заказчика:</strong> ${customer.name}</p>
          <p><strong>Почта заказчика:</strong> ${customer.email}</p>
          <p><strong>Номер телефона заказчика:</strong> ${customer.phone || 'Не указан'}</p>
          <h2>Детали заказа:</h2>
          <ul>
            ${cartItems.map(item => `
              <li>
                <p><strong>Товар:</strong> ${item.name}</p>
                <p><strong>Количество:</strong> ${item.quantity}</p>
                <p><strong>Размер:</strong> ${item.size}</p>
                <p><strong>Цена:</strong> ${item.price} грн</p>
              </li>
            `).join('')}
          </ul>
          <p><strong>Общая сумма:</strong> ${totalAmount} грн</p>
          <p><strong>Адрес доставки:</strong> ${customer.address}</p>
        `;

        // Отправка письма
        await transporter.sendMail({
            from: '"Siren Store" <siren.serena.official@gmail.com>', // Отправитель
            to: 'siren.serena.official@gmail.com', // Email администратора
            subject: 'Новый заказ', // Тема письма
            html: emailContent, // Текст письма
        });

        return new Response(
            JSON.stringify({ message: 'Order sent successfully' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending order email:', error);
        return new Response(
            JSON.stringify({ message: 'Error sending order email' }),
            { status: 500 }
        );
    }
}
