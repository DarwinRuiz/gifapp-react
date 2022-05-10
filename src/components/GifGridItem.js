import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card item-img-gif">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
