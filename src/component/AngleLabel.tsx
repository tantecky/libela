import './AngleLabel.css'
import { IAngleData } from '../model/AngleData'

export default function AngleLabel({ beta, gamma }: IAngleData) {
  return (
    <div className="angle-label">
      <table>
        <tr>
          <td>Beta: </td>
          <td>{beta.toFixed(1)}°</td>
        </tr>
        <tr>
          <td>Gamma: </td>
          <td>{gamma.toFixed(1)}°</td>
        </tr>
      </table>
    </div>
  )
}
