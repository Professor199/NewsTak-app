import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News =(props)=> { 
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)  
  const [totalResults, settotalResults] = useState(0)  
  // document.title=`AdityaTv-${this.capitalizeFirstLetter(props.category)}`

const capitalizeFirstLetter = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
 }
//  const handlePrevClick=async()=>{
//     console.log("previous")
//     setPage(page-1)
//     updateNews()

//  }
// const handleNextClick=async()=>{
//     console.log("next")
//     setPage(page+1)
//     updateNews()
//  }
 const fetchMoreData = async()=> {
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
     setPage(page+1)
    let data= await fetch(url)
    let parsedData= await data.json()
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  };
 
 const updateNews = async()=>{
   const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data= await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)
 }
 useEffect(() => {
   document.title=`AdityaTv-${capitalizeFirstLetter(props.category)}`
    updateNews()
    // eslint-disable-next-line 
 }, [])
 
  return (
          <div className="container my-3">
        <h1 className="text-center"style={{marginTop:"60px"}}>AdityaTv-top {capitalizeFirstLetter(props.category)} headlines</h1>
          {(loading && <Spinner/>)}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
          >
            <div className="container">
        <div className="row">
             {articles.map((element)=>{
               return  <div className="col-md-4"key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={!element.source.name?"unknown":element.source.name}/>
            </div>
             })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&laquo; Previous</button>
                <button disabled={this.state.page+1>(Math.floor(this.state.totalResults/props.pageSize))} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &raquo;</button> 
            </div> */}
     </div>
    )  
 }
 News.defaultProps={
   country:"in",
   pageSize:8,
   category:"general"
 }
 News.propTypes={
   country:PropTypes.string,
   pageSize:PropTypes.number,
   category: PropTypes.string
 }

export default News