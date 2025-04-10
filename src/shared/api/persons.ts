import { Person } from '@/entities/Person'
import axios from 'axios'

export const getPersons = async (): Promise<Person[]> => {
  const { data } = await axios.get<Person[]>(`${__API__}/persons`)
  return data
}

export const getPerson = async (id: number): Promise<Person> => {
  const { data } = await axios.get<Person>(`${__API__}/persons/${id}`)
  return data
}
