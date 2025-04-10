import axios from 'axios'
import { OptionType } from '../types/types'

export const getCompanies = async (): Promise<OptionType[]> => {
  const { data } = await axios.get<OptionType[]>(`${__API__}/companies`)
  return data
}
