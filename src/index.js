import { useEffect, useState } from 'react'

function useDetectOffline() {
  const [offline, setOffline] = useState(false)

  useEffect(() => {
    function handleConnectionStatus(status) {
      setOffline(status.type === 'offline')
    }

    if (navigator) {
      setOffline(!navigator.onLine)
    }

    ;['online', 'offline'].forEach((status) => {
      if (window?.addEventListener) {
        window.addEventListener(status, handleConnectionStatus)
      }
    })

    return function () {
      ;['online', 'offline'].forEach((status) => {
        if (window?.addEventListener) {
          window.removeEventListener(status, handleConnectionStatus)
        }
      })
    }
  }, [])

  return { offline }
}

export default useDetectOffline
