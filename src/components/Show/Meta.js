import React from 'react';

import Seasons from './Seasons';

const meta = (props) => {
  const summary = props.show.summary.replace(/<[/]?(p|b|i)>/g, '')
  const image = props.show.image;

  return (
    <div>
      <p style={{textAlign: 'center', padding: '20px', fontWeight: 'bold'}}>{props.show.name}</p>
      <hr />
      
      <div style={{display: 'inline-block'}}>
        <img style={{float: 'left', transform: 'scale(0.8)'}} src={image} alt=""/>
        <p><b>Summary</b>: {summary}</p>
        <p><b>Rating</b>: {props.show.rating}</p>
        <p><b>Premiered</b>: {props.show.premiered}</p>
        
      </div>
      <hr />
      <div style={{display: 'inline-block', width: '100%'}}>
        <Seasons showId={props.show.id}/>
      </div>
      
    </div>
  );
}

export default meta;