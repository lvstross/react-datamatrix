import { jsx as _jsx } from "react/jsx-runtime";
import DATAMatrix from './utils/datamatrix';
export default function DataMatrix({ msg = '', dim = 256, rct = 0, pad = 2, pal = ["#000000", "#f2f4f8"], vrb = 0, imgAttrs }) {
    const dm = DATAMatrix({ msg, dim, rct, pad, pal, vrb });
    return (_jsx("img", { ...imgAttrs, src: `data:image/svg+xml;base64,${window.btoa(dm?.outerHTML)}` }));
}
