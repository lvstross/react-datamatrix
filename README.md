# React DataMatrix SVG

A React component wrapper for [datamatrix-svg](https://github.com/datalog/datamatrix-svg)

<img src="https://github.com/lvstross/react-datamatrix/blob/main/public/assets/datamatrix-svg.jpg?raw=true" width="150px" height="150px" />

## Installation
    npm install react-datamatrix-svg

## Usage

```javascript
import React from 'react'
import DataMatrix from 'react-datamatrix-svg'

const App = () => {
    return (
        <DataMatrix msg="Hello World" dim={50} />
    )
}

export default App
```

## Full Usage

```javascript
import React from 'react'
import DataMatrix from 'react-datamatrix-svg'

const App = () => {
    return (
        <DataMatrix
            msg="Hello World"
            dim={50}
            rct={1}
            pad={10}
            pal={["#000", "#fff"]}
            vrb={1}
            imgAttrs={{
                alt: 'Alt text for image'
            }}
        />
    )
}

export default App
```

## Props
| Name | Type | Required | Description |
|:---:|:---|:---:|:---|
| msg | string | Yes | Any string to be encoded. |
| dim | number | No  | is equal to needed dimention (height) in pixels, default value is `256`. |
| rct | number | No  | set 1 to render rectangle Data Matrix if possible, default value is `0`. |
| pad | number | No  | white space padding, default value is `2` blocks, set `0` for no padding. |
| pal | string[] | No | is array of [`color`,`background-color`] strings that represent hex color codes, default value is [`'#000'`] along with transparent background. Set [`'#000'`,`'#fff'`] to make background opaque.
| vrb | number | No | svg node is optimized to be compact and default value is `0`, set this parameter to `1` in case you need more verbose output. |
| imgAttrs | ImgHTMLAttributes | No | Any `<img>` attributes you would like to pass down to the image rendering the svg. |
