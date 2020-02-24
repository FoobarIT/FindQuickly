import React from 'react'
import {Card, Elevation, Button, Icon} from '@blueprintjs/core'

const Output = (props) => {

  const options = props.results && props.results.map(r => (

    <Card className="cardModifier" interactive={false} elevation={Elevation.THREE} key={r.id}>
        <h2>{r.API}</h2>
        <p>Description: {r.Description}</p>
        <p>Category: {r.Category}</p>
        <hr />
        <p>Auth: {r.Auth}</p>
        <p>Cors: {r.Cors}</p>

    </Card>
  ))
  return <ul>{options}</ul>
}

export default Output
