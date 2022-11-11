/**
	https://github.com/lvstross/react-datamatrix
	License: MIT
	Copyright (c) 2022 Levi Gonzales
*/

import React from 'react'
import DATAMatrix, { DataMatrixArgs } from './utils/datamatrix'

export interface DataMatrixProps extends DataMatrixArgs {
  imgAttrs?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export default function DataMatrix({
  msg = '',
  dim = 256,
  rct = 0,
  pad = 2,
  pal = ["#000000", "#f2f4f8"],
  vrb = 0,
  imgAttrs
}: DataMatrixProps) {
  const dm = DATAMatrix({ msg, dim, rct, pad, pal, vrb }) as HTMLElement

  return (
    <img
      {...imgAttrs}
      src={`data:image/svg+xml;base64,${window.btoa(dm?.outerHTML)}`}
    />
  )
}

