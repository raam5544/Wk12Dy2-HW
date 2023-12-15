import React from 'react'

function index(props) {
  return (
    <div style={{ backGroundColor: 'blue', textAlign: 'center' }}>
      <h1>See All the Pokemon</h1>
      <ul>
        {props.poke.map((p, i) => {
          return (
            <a href={`/pokemon/${i}`}>
              <li style={{ margin: '10px', textAlign: 'center' }}><h2>{p.name[0].toUpperCase() + p.name.slice(1)}</h2></li>
            </a>
          )
        })}
      </ul>
    </div>
  )
}

export default index