export type IntentionModel = {
  id: string,
  title: string,
  summary: string,
  text?: string,
  categories?: string,
  currentWork?: string,
  nextWorks?: string[],
}
