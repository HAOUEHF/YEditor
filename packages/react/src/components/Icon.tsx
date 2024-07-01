import { Suspense, lazy } from 'react'

type IconProps = {
  name: string
  width?: number
  height?: number
}

const Icon = ({ name, width = 16, height = 16, ...rest }: IconProps) => {
  // 动态导入图标组件
  const IconComponent = lazy(() => import(`@p/icons/${name}.svg?react`))

  return (
    <Suspense>
      <IconComponent width={width} height={height} {...rest} />
    </Suspense>
  )
}

export default Icon
