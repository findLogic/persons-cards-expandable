import axios from 'axios'
import { OptionType } from '../types/types'

export const getCities = async (): Promise<OptionType[]> => {
  const { data } = await axios.get<OptionType[]>(`${__API__}/cities`)
  return data
}
