import React from "react"

type IconProps = {
  props?: React.SVGProps<SVGSVGElement>
  width: string | number | undefined
  height: string | number | undefined
}

const IconFavorite: React.FunctionComponent<IconProps> = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
    <g fill="none" fillRule="evenodd">
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 3.19c8.222-6.593 9.555 5.999 0 9.776C-1.555 9.93-.222-3.403 8 3.19z"
      />
    </g>
  </svg>
)

export default IconFavorite
