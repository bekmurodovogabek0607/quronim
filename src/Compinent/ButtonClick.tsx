import React from 'react'
type ButtonProps={
Style:"prymary"|"secondry"
} & React.ComponentProps<'button'>
const ButtonClick = ({children,...rest}:ButtonProps) => {
  return (
    <button  className={`ButtonClick ${rest.Style}`}>{children}</button>
  )
}
export default ButtonClick