import React from 'react';

export interface DataMatrixArgs {
    msg: string;
    dim?: number;
    rct?: number;
    pad?: number;
    pal?: string[];
    vrb?: number;
}
export function DATAMatrix(Q: DataMatrixArgs): any;

export interface DataMatrixProps extends DataMatrixArgs {
    imgAttrs?: React.ImgHTMLAttributes<HTMLImageElement>;
}
export default function DataMatrix({ msg, dim, rct, pad, pal, vrb, imgAttrs }: DataMatrixProps): JSX.Element;
