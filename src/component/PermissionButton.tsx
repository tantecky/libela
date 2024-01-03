import './PermissionButton.css'

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

interface Props {
  onClick: Function
}

export default function PermissionButton({ onClick }: Props) {
  const requestPermission = (
    DeviceOrientationEvent as unknown as DeviceOrientationEventiOS
  ).requestPermission
  const iOS = typeof requestPermission === 'function'

  if (!iOS) {
    return null
  }

  return (
    <button
      className="permission-button"
      onClick={() => {
        requestPermission().then((response) => {
          if (response === 'granted') {
            onClick()
          }
        })
      }}
    >
      Grant permission
    </button>
  )
}
