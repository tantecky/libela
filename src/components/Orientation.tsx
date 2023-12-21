import { useEffect, useState } from 'react'

interface OrientationData {
  alpha: number | null
  beta: number | null
  gamma: number | null
}

export default function Orientation() {
  const [orientationData, setOrientationData] = useState<OrientationData>()

  useEffect(() => {
    window.addEventListener(
      'deviceorientation',
      (event: DeviceOrientationEvent) => {
        setOrientationData({
          alpha: event.alpha,
          beta: event.beta,
          gamma: event.gamma,
        })
      },
      true,
    )
  })

  return (
    <>
      <p>alpha:{orientationData?.alpha}</p>
      <p>beta:{orientationData?.beta}</p>
      <p>gamma:{orientationData?.gamma}</p>
    </>
  )
}
