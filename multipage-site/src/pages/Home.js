import React from 'react'
import './Home.css';

import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom';

const Home = () => {
    const {data:articles, isLoading, error} = useFetch("http://localhost:3000/articles");

  return (
    <div className='home'>
        <h2>Articles</h2>
        {isLoading && <div>Loading....</div>}
        {error && <div>{error}</div>}
        {articles && articles.map((article) => (
            <div key={article.id} className="card">
                <h3>{article.title}</h3>
                <p>{article.author}</p>
                <Link to={`/articles/${article.id}`}>Read more...</Link>
            </div>
        ))}
    </div>
  )
}

export default Home