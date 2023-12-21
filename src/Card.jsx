import React from 'react'
import './Card.css'
import Tag from './Tag.jsx'

function Card(props) {
    return (
        <div className="card_background">
            <div className="image_section">
                <img className="image" src={props.image} />
            </div>
            <div className="tag_section">
                <Tag text={props.tag} color={props.tagColor} />
            </div>
            <div className="text_area">
                <h1 className="card_title">{props.title}</h1>
                <p className="card_description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card