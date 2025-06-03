import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CheckinUseCase } from './check-in'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { MaxNumberOfCheckInsError } from './errors/max-number-of-check-ins-error'
import { MaxDistanceError } from './errors/max-distance-error'

let checkInsRepository: InMemoryCheckInsRepository
let gymsRepository: InMemoryGymsRepository
let sut: CheckinUseCase
let gymId: string

describe('Check in Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository()
    sut = new CheckinUseCase(checkInsRepository, gymsRepository)

    vi.useFakeTimers()

    const gym = await gymsRepository.create({
      id: 'gymId',
      description: 'description',
      title: 'gym',
      phone: '',
      latitude: 0,
      longitude: 0,
    })

    gymId = gym.id
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId,
      userId: 'userId',
      userLatitude: 0,
      userLongitude: 0,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2025, 5, 2, 16, 0, 0))

    await sut.execute({
      gymId,
      userId: 'userId',
      userLatitude: 0,
      userLongitude: 0,
    })

    await expect(() =>
      sut.execute({
        gymId,
        userId: 'userId',
        userLatitude: 0,
        userLongitude: 0,
      }),
    ).rejects.instanceOf(MaxNumberOfCheckInsError)
  })

  it('should be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2025, 5, 2, 16, 0, 0))

    await sut.execute({
      gymId,
      userId: 'userId',
      userLatitude: 0,
      userLongitude: 0,
    })

    vi.setSystemTime(new Date(2025, 5, 3, 16, 0, 0))

    const { checkIn } = await sut.execute({
      gymId,
      userId: 'userId',
      userLatitude: 0,
      userLongitude: 0,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in on distant gym', async () => {
    const gym2 = await gymsRepository.create({
      description: 'description',
      title: 'gym',
      phone: '',
      latitude: -25.9490853,
      longitude: 32.4428563,
    })

    await expect(() =>
      sut.execute({
        gymId: gym2.id,
        userId: 'userId',
        userLatitude: -25.952072,
        userLongitude: 32.459716,
      }),
    ).rejects.instanceOf(MaxDistanceError)
  })
})
