function clipAngle(value: number): number {
  return Math.max(Math.min(value, 90), -90)
}

export interface IAngleData {
  beta: number
  gamma: number
}

export class AngleData implements IAngleData {
  beta: number
  gamma: number

  constructor(beta: number, gamma: number) {
    this.beta = clipAngle(beta)
    this.gamma = clipAngle(gamma)
  }
}
