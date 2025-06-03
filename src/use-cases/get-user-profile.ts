import type { UsersRepository } from '@/repositories/users-repository'
import type { User } from 'generated/prisma'
import { ResourcesNotFoundErrorr } from './errors/resource-not-found-error'

interface GetUserProfileUseCaseRequest {
  userId: string
}

interface GetUserProfileUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: UsersRepository) { }

  async execute({
    userId,
  }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) throw new ResourcesNotFoundErrorr()

    return {
      user,
    }
  }
}
