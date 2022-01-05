import { useEffect, useState } from "react"

export function Async() {
  const [isButtonInvisible, setisButtonInvisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setisButtonInvisible(true)
    }, 1000)
  }, [])

  return (
    <div>
      <div>Hello World</div>
      {!isButtonInvisible && <button>Button </button>}
    </div>
  )
}