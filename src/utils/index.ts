// 防抖函数
const useDebounce = (fn: () => void, delay: number = 200) => {
  let timer: null | NodeJS.Timeout = null
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    fn()
  }, delay)

}

export {
  useDebounce
}