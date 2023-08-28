import client from './client'

const fetcher = async (url: string) => {
  const response = await client.get(url)

  if (!response.ok) {
    const error = await response.json()

    throw {
      ...error,
      status: response.status,
    }
  }

  return response.json()
}

export default fetcher
