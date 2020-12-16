import { optionsDate } from '../store/const'

export default function formatingDate(date) {
  let FormatingDate = new Date(date)

  return FormatingDate.toLocaleString('ru', optionsDate)
}
