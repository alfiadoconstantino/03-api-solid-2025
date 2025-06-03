import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from '../create-gym'

export function makeCreateGymUseCase() {
  const prismaGymRepository = new PrismaGymsRepository()
  const createGymUseCase = new CreateGymUseCase(prismaGymRepository)

  return createGymUseCase
}
