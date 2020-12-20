import { AddIntention, AddIntentionModel, IntentionModel, AddIntentionRepository } from './protocols'

export class DbAddIntention implements AddIntention {
  constructor (private readonly addIntentionRepository: AddIntentionRepository) {}

  async add (intention: AddIntentionModel): Promise<IntentionModel> {
    return await this.addIntentionRepository.add(intention)
  }
}