export interface Results {
  backendError: string
  draws: ModelDraw[]
  success: boolean
  visibleErrors: VisibleErrors
}

export interface ModelDraw {
  additionalNumbers: string[]
  date: string
  gameAmount: number
  jackpot: number
  megaPlier: string
  numbers: string[]
}

export interface VisibleErrors {
  backendError: string
  frontendError: string
}
