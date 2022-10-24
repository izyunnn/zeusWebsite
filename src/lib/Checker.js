const { body } = document
const ipad = 768 // use ipad width
const largeDesktops = 1200

/** @summary 判斷使用者是否為手機，避免手機翻轉時，RWD變動
* @return {Boolean}
*/
export function _isMobile () {
  const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag || false
}

/** @summary 判斷使用者瀏覽器大小是否使用 RWD
* @return {Boolean}
*/
export function _isRWD () {
  const rect = body.getBoundingClientRect()
  return rect.width - 1 < largeDesktops
}

/** @summary 區分 mobile, ipad 使用
* @return {Boolean}
*/
export function _isIpad () {
  const rect = body.getBoundingClientRect()
  return (rect.width <= largeDesktops && rect.width >= ipad)
}
