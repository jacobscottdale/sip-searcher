import axios from 'axios'
import config from '../config'
import { useState, useEffect, useCallback } from 'react'

axios.defaults.baseURL = config.baseURL

export const useAxios = <T>(
  url: string,
  query: string = '',
  loadOnStart: boolean = true
):
  {
    loading: boolean,
    data: T | null,
    error: string,
    request: (updatedQuery: string) => void
  } =>
{
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ data, setData ] = useState<T | null>(null)
  const [ error, setError ] = useState('')

  useEffect(() =>
  {
    if (loadOnStart) sendRequest(url, query)
    else setLoading(false)
  }, [ url, query, loadOnStart ])

  const sendRequest = async (url: string, query: string) =>
  {
    console.log('request')
    setLoading(true)
    try {
      console.log(url + query)
      const res = await axios.get(url + query)
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

  const request = useCallback((updatedQuery) => sendRequest(url, updatedQuery), [ url ])

  return { loading, data, error, request }
}