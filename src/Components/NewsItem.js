import React from 'react'

const NewsItem =(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card mx-3" style={{width:"18 rem"}}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
    {source}
    </span>
  <img src={!imageUrl?imageUrl="https://www.punekarnews.in/wp-content/uploads/2023/09/Pcmc-2-1.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    </div>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
    )

}

export default NewsItem