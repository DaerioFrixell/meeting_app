import { FC, FormEvent, useState } from 'react'

type FormField = {
  asd: string | number
}
export const FormField: FC<FormField> = ({ asd }) => {
  const [clickOnField, setClickOnField] = useState(false)
  const [fieldValue, setFieldValue] = useState(asd)

  const handleStateCondition = () => {
    setClickOnField(!clickOnField)
  }

  const handlerValue = (e: FormEvent<HTMLInputElement>) => {
    setFieldValue(e.currentTarget.value)
  }

  return clickOnField ? (
    <>
      <input value={fieldValue} onChange={handlerValue} />

      <p onClick={handleStateCondition}>cl</p>
    </>
  ) : (
    <p onClick={handleStateCondition}>
      {fieldValue ? fieldValue : '-'}
    </p>
  )
}
