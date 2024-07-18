import React, { useEffect, useState } from 'react';
import './News.css';

function News() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9; // Displaying 9 cards per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk?page=${currentPage}&perPage=${articlesPerPage}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'a82e98ba98msh26930723ec0d6c0p18a24fjsndfeabbe9b61e',
            'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
            'Accept': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const newsData = await response.json();
        setNews(newsData.data || []);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchNews();
  }, [currentPage]);

  // Calculate total pages based on the total number of news articles
  const totalPages = Math.ceil(news.length / articlesPerPage);

  // Ensure currentPage stays within valid bounds when news changes
  useEffect(() => {
    if (news.length > 0) {
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      } else if (currentPage < 1) {
        setCurrentPage(1);
      }
    }
  }, [currentPage, totalPages, news]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Slice the news array to display only the articles for the current page
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedNews = news.slice(startIndex, endIndex);

  return (
    <div className="news-container">
      <h1 className='text-center text-lg mb-5'>Cryptocurrency News</h1>
      <div className="card-container">
        {displayedNews.map((article, index) => (
          <div className="card" key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default News;
