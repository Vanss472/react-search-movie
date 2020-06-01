import React from "react"

type ButtonProps = {
  className?: string | undefined
  type?: "submit" | "reset" | "button"
  text: string
  clicked?: (event: React.MouseEvent<HTMLButtonElement>) => void
  prepend?: React.ReactNode
  id?: string
}
const Button: React.FunctionComponent<ButtonProps> = ({ type, text, clicked, className, prepend, id }: ButtonProps) => (
  <button className={className} type={type} onClick={clicked} aria-labelledby={id}>
    {prepend}
    <span id={id}>{text}</span>
  </button>
)

export default Button
