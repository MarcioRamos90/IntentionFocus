import { IntentionModel } from '../models/intention';

export interface AddIntentionModel {
  title: string,
  summary: string,
  text: string,
  categories: string,
  currentWork: string,
  nextWorks?: string[],
}

export interface AddIntention {
  add: (intention: IntentionModel) => Promise<IntentionModel>
}