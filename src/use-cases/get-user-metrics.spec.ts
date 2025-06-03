import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { GetUserMetricsUseCase } from './get-user-metrics'

let checkInsRepository: InMemoryCheckInsRepository
let sut: GetUserMetricsUseCase

describe('Get user metrics Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new GetUserMetricsUseCase(checkInsRepository)
  })

  it('should be able to get check-ins count from metrics', async () => {
    await checkInsRepository.create({
      gym_id: 'gym01',
      user_id: 'userId',
    })

    await checkInsRepository.create({
      gym_id: 'gym02',
      user_id: 'userId',
    })

    const { checkInsCounts } = await sut.execute({
      userId: 'userId',
    })

    expect(checkInsCounts).toEqual(2)
  })
})
