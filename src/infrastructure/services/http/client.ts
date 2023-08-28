const headers = { 'Content-Type': 'application/json' }

const _delete = (url: string) => fetch(url, { headers, method: 'DELETE' })

const get = (url: string) => fetch(url, { headers, method: 'GET' })

const post = (url: string, body: string) =>
  fetch(url, { body, headers, method: 'POST' })

const put = (url: string, body: string) =>
  fetch(url, { body, headers, method: 'PUT' })

const client = { delete: _delete, get, post, put } as const

export default client
