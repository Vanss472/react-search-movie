import React from "react"

type IconProps = {
  props?: React.SVGProps<SVGSVGElement>
  width: string | number | undefined
  height: string | number | undefined
}

const IconBackButton: React.FunctionComponent<IconProps> = props => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Go Back to the Homepage</title>
    <g fill="none" fillRule="evenodd">
      <path stroke="#8B93A6" strokeWidth="2" d="M9 19.071L1.929 12h0L9 4.929" />
      <path d="M3 12h20" stroke="#8B93A6" strokeWidth="2" strokeLinecap="square" />
    </g>
  </svg>
)

export default IconBackButton
