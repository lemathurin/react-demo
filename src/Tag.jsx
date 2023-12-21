import React from 'react'
import './Tag.css'

function Tag(props) {
    const tagClasses = 'tag ' + (props.color || 'blue');
  
    return (
        <span className={tagClasses}>
            <span className="text">{props.text}</span>
        </span>
    );
  }
  
  export default Tag;