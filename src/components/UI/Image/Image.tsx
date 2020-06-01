import React from "react"

type ImageProps = {
  className?: string | undefined
  imagePath: string
  imageAlt: string
}

const Image: React.FunctionComponent<ImageProps> = ({ imagePath, imageAlt, className }: ImageProps) => (
  <img className={className} src={imagePath} alt={imageAlt} />
)

export default Image
