import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeFetchNearbyUseCase() {
  const prismaGymRepository = new PrismaGymsRepository()
  const fetchNearbyGymUseCase = new FetchNearbyGymsUseCase(prismaGymRepository)

  return fetchNearbyGymUseCase
}
