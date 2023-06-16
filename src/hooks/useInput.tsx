import { useState } from 'react'

export default function useInput(
  initialValue: string,
  validation: (val: string) => boolean,
) {
  const [value, setValue] = useState(initialValue)
  const [isValid, setIsValid] = useState(false)

  const handleChange = (val: string) => {
    setValue(val)
    setIsValid(validation(val))
  }

  return {
    value,
    isValid,
    onChange: handleChange,
  }
}

export const nameValidation = (val: string): boolean => {
  return val.length > 1
}

export const passwordValidation = (val: string): boolean => {
  return val.length >= 8
}

export const emailValidation = (val: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  return !!val.match(emailRegex)
}
