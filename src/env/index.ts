import 'dotenv/config'
import { z } from 'zod'

const envSChema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string(),
})

const _env = envSChema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid enviromment varialbles', _env.error.format())

  throw new Error('Invalid enviromment varialbles')
}

export const env = _env.data
