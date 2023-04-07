export const getIsWindowsDevice = () => {
  const { userAgent } = window.navigator
  const WINDOWS_DEVICE_REGEX = /Windows|X11/i

  return WINDOWS_DEVICE_REGEX.test(userAgent)
}
