import type { Gym, Prisma } from 'generated/prisma'

export interface FindManyNearby {
  latitude: number
  longitude: number
}

export interface GymRepository {
  findById(gymId: string): Promise<Gym | null>
  create(data: Prisma.GymCreateInput): Promise<Gym>
  searchMany(query: string, page: number): Promise<Gym[]>
  findManyNearby(params: FindManyNearby): Promise<Gym[]>
}
