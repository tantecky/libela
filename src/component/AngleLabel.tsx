import './AngleLabel.css'
import { IAngleData } from '../model/AngleData'

export default function AngleLabel({ beta, gamma }: IAngleData) {
  return (
    <div className="angle-label">
      <p>
        ⬍{beta.toFixed(1)}° ⬌{gamma.toFixed(1)}°
      </p>
    </div>
  )
}
