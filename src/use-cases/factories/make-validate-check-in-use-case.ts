import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-in-repository'
import { ValidateCheckInUseCase } from '../validate-checkin'

export function makeValidateCheckInUseCase() {
  const prismaCheckInRepository = new PrismaCheckInRepository()
  const validateCheckInUseCase = new ValidateCheckInUseCase(
    prismaCheckInRepository,
  )

  return validateCheckInUseCase
}
