import axios from 'axios'
import config from '../config'
import { useState, useEffect } from 'react'

axios.defaults.baseURL = config.baseURL

export const useAxios = <T>(
  route: string,
  query: string = '',
  loadOnStart: boolean = true
): [ boolean, T | undefined, string, () => void ] =>
{
  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState<T>()
  const [ error, setError ] = useState('')

  useEffect(() =>
  {
    if (loadOnStart) sendRequest()
    else setLoading(false)
  }, [])

  const request = () =>
  {
    sendRequest()
  }

  const sendRequest = async () =>
  {
    setLoading(true)
    try {
      const res = await axios.get(route + query)
      setError('')
      setData(res.data)
    }
    catch (err: any) {
      setError(err.message)
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  return [ loading, data, error, request ]
}