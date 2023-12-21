import AngleLabel from './component/AngleLabel'
import './normalize.css'
import './App.css'
import { useEffect, useState } from 'react'
import { AngleData } from './model/AngleData'

function App() {
  const [angleData, setOrientationData] = useState<AngleData>(
    new AngleData(0, 0),
  )

  useEffect(() => {
    window.addEventListener(
      'deviceorientation',
      (event: DeviceOrientationEvent) => {
        setOrientationData(
          new AngleData(event.beta as number, event.gamma as number),
        )
      },
      true,
    )
  })

  return (
    <>
      <AngleLabel beta={angleData.beta} gamma={angleData.gamma} />
    </>
  )
}

export default App
