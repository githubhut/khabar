import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading';


export default function News(props) {


    const [article, setarticle] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    let [totalResults, settotalResults] = useState(0);

    let { country, pageSize, category, updateProgress } = props;

    let capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }





    const fetchData = async (p, isInitial = false) => {

        let url = `https://api-khabar.vercel.app/api/data?category=${category}&page=${p}&pageSize=${pageSize}`;
        try {
            setloading(true);
            updateProgress(0)
            const response = await fetch(url);
            updateProgress(30)  
            const parsedData = await response.json();
            if (parsedData.status!=="ok") {
                throw new Error('Network response was not ok');
            }
            if (parsedData.totalResults) settotalResults(parsedData.totalResults);
            updateProgress(70)
            if (!isInitial) setarticle((prevArticles) => [...prevArticles, ...parsedData.articles]);
            else setarticle(parsedData.articles);
            updateProgress(100)


            setloading(false);
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {
        document.title = `${capitalize(category)} - Khabar`;
        fetchData(1, true);
    }, []);
    
    useEffect(() => {
        if (page > 1) {
            fetchData(page);
        }
    }, [page]);



    const fetchMoreData = () => {
        setpage(prevPage => prevPage + 1);
    }


    return (
        <div>
            <div className="container">
                <div className="text-center my-3">
                    <h1 style={{ marginTop: "90px" , color:'black'}}>Khabar- Top {capitalize(`${category}`)} Headlines</h1>

                    {loading && <Loading />}
                </div>
                {/* {!loading && article.map(e => {
                        // console.log(e);
                        return <div className="col-md-4" key={e.url}>
                        <NewsItem title={e.title} discription={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                        </div>
                        })} */}

                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== totalResults}
                >
                    <div className="container">

                        <div className="row">
                            {article.map(e => {
                                return <div className="col-md-4" key={e.url}>
                                    <NewsItem title={e.title} discription={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </div>


        </div>
    )
}
