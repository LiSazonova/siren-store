import crypto from 'crypto';

export async function POST(req) {
    try {
        const { cartItems, totalAmount, customer } = await req.json();

        const merchantAccount = process.env.MERCHANT_ACCOUNT;
        const merchantDomainName = process.env.MERCHANT_DOMAIN_NAME;
        const merchantKey = process.env.MERCHANT_SECRET_KEY;
        const returnUrl = process.env.RETURN_URL;

        const orderReference = `ORDER-${Date.now()}`;
        const orderDate = Math.floor(Date.now() / 1000);
        const currency = 'UAH';

        const productName = cartItems.map((item) => item.name);
        const productPrice = cartItems.map((item) => Number(item.price));
        const productCount = cartItems.map((item) => Number(item.quantity));

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

        const merchantSignature = crypto
            .createHash('sha1')
            .update(signatureString + merchantKey)
            .digest('hex');

        console.log('Signature String:', signatureString);
        console.log('Merchant Signature:', merchantSignature);

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
            returnUrl,
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
