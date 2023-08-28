import { useEffect } from 'react'

const useBeforeUnload = (handler: (event: BeforeUnloadEvent) => void) => {
  useEffect(() => {
    window.addEventListener('beforeunload', handler)

    return () => window.removeEventListener('beforeunload', handler)
  }, [handler])
}

export default useBeforeUnload
