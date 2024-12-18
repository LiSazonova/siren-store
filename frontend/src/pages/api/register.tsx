import { NextApiRequest, NextApiResponse } from 'next';
import { registerUser } from '@/lib/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { username, email, password } = req.body;

      const response = await registerUser(username, email, password);

      if (response.data.success) {
        res.status(200).json(response.data);
      } else {
        res
          .status(400)
          .json({ message: response.data.message || 'Ошибка регистрации' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: error.message || 'Ошибка при регистрации' });
      } else {
        res.status(500).json({ message: 'Неизвестная ошибка' });
      }
    }
  } else {
    res.status(405).json({ message: 'Метод не поддерживается' });
  }
}
