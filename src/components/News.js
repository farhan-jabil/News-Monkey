import React, {useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);


  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);  
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews();
  },[]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }


  // prevButton = async () => {
  //   setState({page: page - 1 });
  //   updateNews();
  // }

  // nextButton = async () => {
  //   setState({page: page + 1 });
  //   updateNews();
  // }


    return (
      <>
        <h1 className='text-center' style={{marginTop: "100px"}}>New Monkey- Top Headlines</h1>
        {loading && <Spinner />}
        <div className='d-flex my-3 text-center justify-content-center'>
          <h5 className='mr-5'>Category <p>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</p> </h5>
          <h5 className='mx-5'>Country <p>{props.country.charAt(0).toUpperCase() + props.country.slice(1)}</p> </h5>
          <h5 className='mx-5'>Total Results <p>{totalResults}</p> </h5>
          {/* <h5 className='mx-5'>Page Number <p>{page}</p> </h5> */}
          {/* <h5 className='mx-5'>Total Items <p>{props.pageSize}</p> </h5> */}
          {/* <h5 className='mx-5'>Total Number of pages <p>{Math.ceil(totalResults / props.pageSize)}</p></h5> */}
        </div>
        {/* <div className="d-flex justify-content-between mt-3">
          <button disabled={page <= 1} type="button" onClick={prevButton} className="btn btn-primary">&#8249; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" onClick={nextButton} className="btn btn-primary">Next &#8250;</button>
        </div> */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='container pb-4'>
            <div className='row my-5'>
              {articles.map((element) => {
                return <div className='col-lg-4 my-3' key={element.url}>
                  <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgURL={element.urlToImage} desURL={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}> </NewsItem>
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )

}

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News 
