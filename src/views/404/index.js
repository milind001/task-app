import React from 'react'

const PageNotFound = () => {

    const myStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    return (
        <div id="wrapper" style={myStyle}>
            <img src="https://i.imgur.com/qIufhof.png" alt="notfound404" style={{height: '100%'}} />
            <div id="info">
                <h3>This page could not be found</h3>
            </div>
        </div >
    )
}

export default PageNotFound;