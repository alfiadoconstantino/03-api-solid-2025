import type { Gym } from 'generated/prisma'
import type { GymRepository } from '@/repositories/gym-repository'

interface GymUseCaseRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface GymUseCaseResponse {
  gym: Gym
}

export class CreateGymUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private gymsRepository: GymRepository) { }

  async execute({
    title,
    description,
    latitude,
    longitude,
  }: GymUseCaseRequest): Promise<GymUseCaseResponse> {
    const gym = await this.gymsRepository.create({
      title,
      description,
      latitude,
      longitude,
    })

    return {
      gym,
    }
  }
}
