import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CheckinUseCase } from '../check-in'
import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-in-repository'

export function makeCheckInUseCase() {
  const prismaCheckInRepository = new PrismaCheckInRepository()
  const prismaGymRepository = new PrismaGymsRepository()
  const checkInUseCase = new CheckinUseCase(
    prismaCheckInRepository,
    prismaGymRepository,
  )

  return checkInUseCase
}
