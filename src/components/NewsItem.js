import React from 'react';
import none from '../images/none.jpg';

const NewsItem = (props) => {

  let { title, description, imgURL, desURL, author, publishedAt, source } = props;
  return (
    <>
      <div className="card">
        <div className='h-100'>
          <img src={!imgURL ? none : imgURL} className="card-img-top" style={{ height: "250px" }} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>by {!author ? "Unknown" : author} at {new Date(publishedAt).toGMTString()}</small></p>
          <a href={desURL} className="btn btn-sm btn-primary" target="_blank">Read More</a>
        </div>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>
    </>
  )
}

export default NewsItem
