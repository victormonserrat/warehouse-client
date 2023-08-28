import { useCallback, useEffect, useState } from 'react'

import { Task } from './types'

const useQueue = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const isEmpty = tasks.length < 1
  const [isMounted, setIsMounted] = useState(true)
  const [isRunning, setIsRunning] = useState(false)

  const enqueue = useCallback(
    (task: Task) => setTasks((current) => [...current, task]),
    [],
  )

  useEffect(() => () => setIsMounted(false), [])

  useEffect(() => {
    ;(async () => {
      if (isRunning || isEmpty) return

      setIsRunning(true)
      await tasks[0]()

      if (!isMounted) return

      setTasks(([, ...current]) => current)
      setIsRunning(false)
    })()
  }, [isEmpty, isMounted, isRunning, tasks])

  return { enqueue, isEmpty } as const
}

export default useQueue
