import { FC, FormEvent, useState } from 'react'

type FormField = {
  asd: string | number
}
export const FormField: FC<FormField> = ({ asd }) => {
  const [condition, setCondition] = useState(false)
  const [fieldValue, setFieldValue] = useState(asd)

  const handleStateCondition = () => {
    setCondition(!condition)
  }

  const handlerValue = (e: FormEvent<HTMLInputElement>) => {
    setFieldValue(e.currentTarget.value)
  }

  return condition ? (
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
