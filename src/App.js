import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import DataMatrix from './lib/DataMatrix';
const App = () => {
    const items = [
        _jsx(DataMatrix, { msg: "Hello World" }),
        _jsx(DataMatrix, { msg: "Hello World", dim: 50 }),
        _jsx(DataMatrix, { msg: "Hello World", dim: 100, pad: 10 }),
        _jsx(DataMatrix, { msg: "Hello World", dim: 150, rct: 1 }),
        _jsx(DataMatrix, { msg: "Hello World", dim: 200, pal: ["#363636", "#398fb1"] }),
        _jsx(DataMatrix, { msg: "Hello World", imgAttrs: { alt: 'Alt text', width: "50", height: "150" } }),
        _jsx(DataMatrix, { msg: "Hello World", dim: 75, vrb: 1 })
    ];
    return (_jsx(_Fragment, { children: items.map((item) => (_jsx(_Fragment, { children: item }))) }));
};
export default App;
