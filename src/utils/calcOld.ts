export const checkOld = (birth: string): number => {
  const currentTime = new Date().getFullYear()
  const parseDate = new Date(birth).getFullYear()
  const old = currentTime - parseDate
  return old
}