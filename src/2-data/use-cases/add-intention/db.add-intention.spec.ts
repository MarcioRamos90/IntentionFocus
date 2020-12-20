import { DbAddIntention } from './db-add-intention'
import { AddIntentionModel, IntentionModel, AddIntentionRepository } from './protocols'

const makeAddIntentionRepository = () => {
  class addIntentionRepository implements AddIntentionRepository {
    async add (intention: AddIntentionModel): Promise<IntentionModel> {
      return {
        id: 'valid_id',
        title: 'valid_title',
        summary: 'valid_title',
        text: 'valid_title',
        categories: 'valid_title',
        currentWork: 'valid_title',
      }
    }
  }
  return new addIntentionRepository()
}

const makeSut = (): DbAddIntention => {
  return new DbAddIntention(makeAddIntentionRepository())
}

describe('DBAddIntention', () => {
  test('Should return an intention id success', async () => {
    const dataInput: AddIntentionModel = {
      title: 'any_title',
      summary: 'any_title',
      text: 'any_title',
      categories: 'any_title',
      currentWork: 'any_title',
    }

    const dbAddIntention = makeSut()
    const response = await dbAddIntention.add(dataInput)

    expect(response).toEqual({
      id: 'valid_id',
      title: 'valid_title',
      summary: 'valid_title',
      text: 'valid_title',
      categories: 'valid_title',
      currentWork: 'valid_title',
    })
  })
})
