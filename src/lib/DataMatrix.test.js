import { jsx as _jsx } from "react/jsx-runtime";
import renderer from 'react-test-renderer';
import { describe, expect, test } from 'vitest';
import DataMatrix from './DataMatrix';
describe('DataMatrix', () => {
    test('DataMatrix component renders correctly', () => {
        const component = renderer.create(_jsx(DataMatrix, { msg: "hello world" }));
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('DataMatrix component renders with props correctly', () => {
        const props = {
            msg: 'Hello World',
            dim: 300,
            rct: 1,
            pad: 5,
            pal: ["#000", "#fff"],
            vrb: 1
        };
        const component = renderer.create(_jsx(DataMatrix, { ...props }));
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('DataMatrix component renders with img attributes', () => {
        const component = renderer.create(_jsx(DataMatrix, { msg: "hello world", imgAttrs: { alt: 'Hello World', width: "500", height: "600" } }));
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
