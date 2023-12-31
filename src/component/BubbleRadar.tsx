import './BubbleRadar.css'
import { IAngleData } from '../model/AngleData'
import { useEffect } from 'react'

const BUBBLE_RADIUS = 15
const CIRCLE_RADIUS = 20
const CIRCLE_BORDER_WIDTH = 5
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

    let bubble = document.getElementById('bubble') as HTMLElement
    const centerBubble = radarRadius - BUBBLE_RADIUS + CIRCLE_BORDER_WIDTH
    bubble.style.width = `${BUBBLE_RADIUS * 2}px`
    bubble.style.height = `${BUBBLE_RADIUS * 2}px`
    bubble.style.borderWidth = `${CIRCLE_BORDER_WIDTH}px`

    let circle = document.getElementById('circle') as HTMLElement
    const centerCircle = radarRadius - CIRCLE_RADIUS
    circle.style.width = `${CIRCLE_RADIUS * 2}px`
    circle.style.height = `${CIRCLE_RADIUS * 2}px`
    circle.style.top = `${centerCircle}px`
    circle.style.left = `${centerCircle}px`

    const betaNorm = beta / MAX_ANGLE
    const gammaNorm = gamma / MAX_ANGLE

    const dx = gammaNorm * radarRadius
    const dy = betaNorm * radarRadius

    if (dx ** 2 + dy ** 2 < (radarRadius - BUBBLE_RADIUS) ** 2) {
      bubble.style.top = `${centerBubble - dy}px`
      bubble.style.left = `${centerBubble - dx}px`
    }
  }, [beta, gamma])

  return (
    <div id="radar">
      <div id="circle"></div>
      <div id="bubble"></div>
    </div>
  )
}
