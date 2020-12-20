import { AddIntentionModel, IntentionModel } from '../use-cases/add-intention/protocols'

export interface AddIntentionRepository {
  add: (intention: AddIntentionModel) => Promise<IntentionModel>
}
