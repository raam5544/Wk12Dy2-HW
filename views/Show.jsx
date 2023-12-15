import React from 'react'

function Show(props) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>
                Gotta Catch 'Em All'
            </h1>
            <h2>
                {props.poke.name[0].toUpperCase() + props.poke.name.slice(1)}
            </h2>
            <img src={props.poke.img + '.jpg'} />
            <a href='/pokemon'>Back</a>
        </div>
    )
}

export default Show