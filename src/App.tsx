import React from 'react'
import DataMatrix from './lib/DataMatrix'

const App = () => {
    const items = [
        <DataMatrix msg="Hello World" />,
        <DataMatrix msg="Hello World" dim={50} />,
        <DataMatrix msg="Hello World" dim={100} pad={10} />,
        <DataMatrix msg="Hello World" dim={150} rct={1} />,
        <DataMatrix msg="Hello World" dim={200} pal={["#363636", "#398fb1"]} />,
        <DataMatrix msg="Hello World" imgAttrs={{ alt: 'Alt text', width: "50", height: "150" }} />,
        <DataMatrix msg="Hello World" dim={75} vrb={1} />
    ]
    return (
        <>
            {items.map((item) => (
                <>{item}</>
            ))}
        </>
    )
}

export default App