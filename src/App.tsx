import AngleLabel from './component/AngleLabel'
import './normalize.css'
import './App.css'
import { useEffect, useState } from 'react'
import { AngleData } from './model/AngleData'
import BubbleRadar from './component/BubbleRadar'
import ZeroReset from './component/ZeroReset'
import InstallButton from './component/InstallButton'
import Footer from './component/Footer'

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
  }, [])

  return (
    <>
      <InstallButton />
      <div className="container-center">
        <BubbleRadar beta={angleData.beta} gamma={angleData.gamma} />
        <AngleLabel beta={angleData.beta} gamma={angleData.gamma} />
        <ZeroReset
          beta={angleData.beta}
          gamma={angleData.gamma}
          setOrientationData={setOrientationData}
        />
        <Footer />
      </div>
    </>
  )
}

export default App
