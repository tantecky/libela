import './InstallButton.css'

import { useEffect, useState } from 'react'

let installPrompt: any | null = null

async function Install(setButtonHidden: Function) {
  if (!installPrompt) {
    return
  }

  await installPrompt.prompt()
  installPrompt = null
  setButtonHidden(true)
}

export default function InstallButton() {
  const [buttonHidden, setButtonHidden] = useState(true)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault()
      installPrompt = event
      setButtonHidden(false)
    })
  })
  return (
    <button
      className="install-button"
      id="install"
      hidden={buttonHidden}
      onClick={() => Install(setButtonHidden)}
    >
      ⬇Install
    </button>
  )
}
