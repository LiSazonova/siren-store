export async function POST(req) {
    try {
        const body = await req.json();

        const { orderReference, transactionStatus } = body;

        if (transactionStatus === 'Approved') {
            console.log(`Заказ ${orderReference} успешно оплачен.`);
            // Логика для успешного платежа
        } else {
            console.log(`Заказ ${orderReference} отклонен или не оплачен.`);
            // Логика для отказа в платеже
        }

        // Ответ WayForPay, чтобы подтвердить получение данных
        return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
    } catch (error) {
        console.error('Ошибка обработки вебхука:', error);
        return new Response(JSON.stringify({ status: 'error', message: error.message }), {
            status: 500,
        });
    }
}
