import { SearchGymsUseCase } from '../search-gyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeSearchGymUseCase() {
  const prismaGymRepository = new PrismaGymsRepository()
  const searchGymUseCase = new SearchGymsUseCase(prismaGymRepository)

  return searchGymUseCase
}
