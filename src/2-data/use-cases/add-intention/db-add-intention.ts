import { AddIntention, AddIntentionModel, IntentionModel, AddIntentionRepository } from './protocols'

export class DbAddIntention implements AddIntention {
  private readonly addIntentionRepository: AddIntentionRepository

  constructor (addIntentionRepository: AddIntentionRepository) {
    this.addIntentionRepository = addIntentionRepository
  }

  async add (intention: AddIntentionModel): Promise<IntentionModel> {
    return await this.addIntentionRepository.add(intention)
  }
}
