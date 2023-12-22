import type { NextApiRequest, NextApiResponse } from 'next'
import {conn} from '@/database'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const response = await conn.query('select now()')

  console.log(response)

  res.json({ message: 'pong', time: response.rows[0].now })
}
