import { user } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<user[]>
) {
  const users = await client.user.findMany();
  res.status(200).json(users);
}
