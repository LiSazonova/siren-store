import crypto from 'crypto';

export async function POST(req) {
    try {
        const { cartItems, totalAmount, customer } = await req.json();

        const merchantAccount = 'your_merchant_account';
        const merchantDomainName = 'yourdomain.com';
        const orderReference = `ORDER-${Date.now()}`;
        const orderDate = Math.floor(Date.now() / 1000);
        const currency = 'UAH';

        // Данные о товарах
        const productName = cartItems.map((item) => item.name);
        const productPrice = cartItems.map((item) => Number(item.price));
        const productCount = cartItems.map((item) => Number(item.quantity));

        // Подпись
        const signatureString = [
            merchantAccount,
            merchantDomainName,
            orderReference,
            orderDate,
            totalAmount,
            currency,
            ...productName,
            ...productCount,
            ...productPrice,
        ].join(';');

        const merchantKey = 'your_merchant_secret_key';
        const merchantSignature = crypto
            .createHash('sha1')
            .update(signatureString + merchantKey)
            .digest('hex');

        const paymentData = {
            merchantAccount,
            merchantDomainName,
            orderReference,
            orderDate,
            amount: totalAmount,
            currency,
            productName,
            productPrice,
            productCount,
            merchantSignature,
            returnUrl: 'https://yourdomain.com/success',
        };

        // Генерация URL
        const paymentUrl = `https://secure.wayforpay.com/pay?data=${encodeURIComponent(
            JSON.stringify(paymentData)
        )}`;

        return new Response(JSON.stringify({ paymentUrl }), { status: 200 });
    } catch (error) {
        console.error('Error creating payment:', error);
        return new Response(JSON.stringify({ message: 'Error creating payment' }), {
            status: 500,
        });
    }
}
