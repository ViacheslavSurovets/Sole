import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react'

import defaultImage from '../../assets/images/no-image.webp'

const Image: FC<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({
  src,
  alt,
  width,
  height,
  ...rest
}) => (
  <img
    src={src || defaultImage}
    alt={alt}
    aria-label={`${alt} image`}
    width={width || '80rem'}
    height={height || '45rem'}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null
      currentTarget.src = defaultImage
    }}
    {...rest}
  />
)

export default Image
