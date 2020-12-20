import { DbAddIntention } from './db-add-intention'
import { AddIntentionModel, IntentionModel, AddIntentionRepository } from './protocols'

const makeAddIntentionRepositoryStub = () => {
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
interface makeSutTypes {
  sut: DbAddIntention
  addIntentionRepositoryStub: AddIntentionRepository
}

const makeSut = (): makeSutTypes => {
  const addIntentionRepositoryStub = makeAddIntentionRepositoryStub()
  const sut =  new DbAddIntention(addIntentionRepositoryStub)
  return {
    sut,
    addIntentionRepositoryStub
  }
}

describe('DBAddIntention', () => {
  it('Should return an intention id success', async () => {
    const dataInput: AddIntentionModel = {
      title: 'any_title',
      summary: 'any_title',
      text: 'any_title',
      categories: 'any_title',
      currentWork: 'any_title',
    }

    const { sut } = makeSut()
    const response = await sut.add(dataInput)

    expect(response).toEqual({
      id: 'valid_id',
      title: 'valid_title',
      summary: 'valid_title',
      text: 'valid_title',
      categories: 'valid_title',
      currentWork: 'valid_title',
    })
  })

  it('Should throw if AddIntentionRepository throws', async () => {
    const { sut, addIntentionRepositoryStub } = makeSut()
    jest.spyOn(addIntentionRepositoryStub, 'add')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const dataInput: AddIntentionModel = {
      title: 'any_title',
      summary: 'any_title',
    }
    const promise = sut.add(dataInput)
    await expect(promise).rejects.toThrow()
  })
})
