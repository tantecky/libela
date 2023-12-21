import { IAngleData } from '../model/AngleData'

export default function AngleLabel({ beta, gamma }: IAngleData) {
  return (
    <>
      <p>Beta: {beta.toFixed(1)}°</p>
      <p>Gamma: {gamma.toFixed(1)}°</p>
    </>
  )
}
