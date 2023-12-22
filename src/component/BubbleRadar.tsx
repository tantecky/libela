import './BubbleRadar.css'
import { IAngleData } from '../model/AngleData'
import { useEffect } from 'react'

const BUBBLE_RADIUS = 15
const MAX_ANGLE = 90

function setRadarSize(): number {
  let radar = document.getElementById('radar') as HTMLCanvasElement
  let size = Math.min(
    Math.min(window.innerWidth, window.innerHeight) * 0.75,
    500,
  )
  radar.style.width = `${size}px`
  radar.style.height = `${size}px`

  return size
}

export default function BubbleRadar({ beta, gamma }: IAngleData) {
  useEffect(() => {
    const radarRadius = setRadarSize() / 2
    let bubble = document.getElementById('bubble') as HTMLCanvasElement

    const center = radarRadius - BUBBLE_RADIUS

    bubble.style.width = `${BUBBLE_RADIUS * 2}px`
    bubble.style.height = `${BUBBLE_RADIUS * 2}px`

    const betaNorm = beta / MAX_ANGLE
    const gammaNorm = gamma / MAX_ANGLE

    const dx = gammaNorm * radarRadius
    const dy = betaNorm * radarRadius

    if (dx ** 2 + dy ** 2 < (radarRadius - BUBBLE_RADIUS) ** 2) {
      bubble.style.top = `${center - dy}px`
      bubble.style.left = `${center - dx}px`
    }

    // let canvas = document.getElementById('canvas') as HTMLCanvasElement
    // let ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    // ctx.strokeStyle = 'white'
    // ctx.moveTo(0, 0)
    // ctx.lineTo(beta, gamma)
    // ctx.stroke()
  })

  return (
    <div id="radar">
      <div id="bubble"></div>
    </div>
  )
}
