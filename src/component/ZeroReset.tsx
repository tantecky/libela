import './ZeroReset.css'
import { AngleData } from '../model/AngleData'

interface Props {
  beta: number
  gamma: number
  setOrientationData: Function
}

function ResetOffset(
  beta: number,
  gamma: number,
  setOrientationData: Function,
) {
  localStorage.setItem('beta', '0')
  localStorage.setItem('gamma', '0')
  setOrientationData(new AngleData(beta, gamma))
}

function SetOffset(beta: number, gamma: number, setOrientationData: Function) {
  localStorage.setItem('beta', beta.toString())
  localStorage.setItem('gamma', gamma.toString())
  setOrientationData(new AngleData(beta, gamma))
}

export default function ZeroReset({ beta, gamma, setOrientationData }: Props) {
  return (
    <div className="zero-reset">
      <button onClick={() => SetOffset(beta, gamma, setOrientationData)}>
        Zero
      </button>
      <button onClick={() => ResetOffset(beta, gamma, setOrientationData)}>
        Reset
      </button>
    </div>
  )
}
