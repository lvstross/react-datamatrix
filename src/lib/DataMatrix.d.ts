/**
    https://github.com/lvstross/react-datamatrix
    License: MIT
    Copyright (c) 2022 Levi Gonzales
*/
import React from 'react';
import { DataMatrixArgs } from './utils/datamatrix';
export interface DataMatrixProps extends DataMatrixArgs {
    imgAttrs?: React.ImgHTMLAttributes<HTMLImageElement>;
}
export default function DataMatrix({ msg, dim, rct, pad, pal, vrb, imgAttrs }: DataMatrixProps): JSX.Element;
