import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} =this.props;
    return (
      <div className="my-3">
        <div  className="card">
          <div style = {{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
        }>
        <span className="badge rounded-pill bg-danger">{source}
        </span>
        </div>
         <img src={!imageUrl ? "https://images.deccanherald.com/deccanherald%2F2024-01%2F2d9129b2-ceaa-4419-8ee4-084faa5104ac%2FGEK_VOKXYAA4wrk.jpg?rect=0%2C9%2C1200%2C630&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop":imageUrl} 
         className="card-img-top" alt="..."/>
          <div  className="card-body">
           <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
         </div>
      </div>
    )
  }
}
export default NewsItem