type calcCurrentOldType = (birth: string,) => number
type calcWasOldType = (birth: string, meetDate: string) => number | "none"

export const calcCurrentOld: calcCurrentOldType = (birth) => {
  const currentTime = new Date().getFullYear()
  const parseBirthDate = new Date(birth).getFullYear()
  const old = currentTime - parseBirthDate
  return old
}

export const calcWasOld: calcWasOldType = (birth, meetDate) => {
  const parseBirthDate = new Date(birth).getFullYear()
  const parseMeetDate = new Date(meetDate).getFullYear()
  const old = parseMeetDate - parseBirthDate

  if (Number.isNaN(old)) {
    return "none"
  } else return old
}