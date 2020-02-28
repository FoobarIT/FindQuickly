import React from 'react'
import {Card, Elevation, Button, Icon} from '@blueprintjs/core'

const Output = (props) => {

  const options = props.results && props.results.map(r => (

    <Card className="cardModifier bp3-dark" interactive={false} elevation={Elevation.TWO} key={r.id}>
        <h2>{r.API}</h2>
        <p>Description: {r.Description}</p>
        <p>Category: {r.Category}</p>
        <hr />
        <p>Auth: {r.Auth}</p>
        <p>Cors: {r.Cors}</p>
        <a className="bp3-button" target="_blank" href={`${r.Link}`}><i class="lni-enter"></i> <span>Visit Website</span></a>

    </Card>
  ))
  return <ul>{options}</ul>
}

export default Output
