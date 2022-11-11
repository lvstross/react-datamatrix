/**
    https://github.com/datalog/datamatrix-svg
    under MIT license
    Copyright (c) 2020 Constantine
*/
export interface DataMatrixArgs {
    msg: string;
    dim?: number;
    rct?: number;
    pad?: number;
    pal?: string[];
    vrb?: number;
}
export default function DATAMatrix(Q: DataMatrixArgs): any;
