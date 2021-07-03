import React from 'react'

const WindowResize = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    console.log('windowWidth', windowWidth)

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div>
            <h1>{windowWidth}</h1>
        </div>
    )
}

export default WindowResize
