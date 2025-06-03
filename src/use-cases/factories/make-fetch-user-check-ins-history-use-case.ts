import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history'
import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-in-repository'

export function makeFetchUserCheckInHistoryUseCase() {
  const prismaCheckInRepository = new PrismaCheckInRepository()
  const fetchUserCheckInHistoryUseCase = new FetchUserCheckInsHistoryUseCase(
    prismaCheckInRepository,
  )

  return fetchUserCheckInHistoryUseCase
}
