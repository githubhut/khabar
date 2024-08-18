import React from 'react'

export default function NewsItem(props) {
    let {title, discription, imageUrl, newsUrl, author, date, source} = props
    return (
        <div>
            
            <div className="card my-3" style={{fontSize:'16px', height:'16rem', backgroundColor:'rgb(127, 161, 195)',color:'rgb(55, 58, 64)', border:'white 2px solid'}} >
                {/* <img src={imageUrl} className="card-img-top" alt="..." style={{height:'16rem'}}/> */}
                    <div className="card-body">
                        <span class="position-absolute top-0 translate-middle bg-danger border-light badge rounded-pill" style={{left:'90%'}}>{source}</span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text" style={{color:'rgb(60, 7, 83)'}}><small>By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
            </div>
        </div>
    )
}
