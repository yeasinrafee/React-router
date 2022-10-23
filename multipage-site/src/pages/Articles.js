import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

export const Articles = () => {
    const { id } = useParams();
    const url = `http://localhost:3000/articles/${id}`;
    const {data: article, isLoading, error} = useFetch(url);
    const history = useNavigate();

    useEffect(()=>{
        //Redirect the page:
        if(error){
            setTimeout(()=>{
                history("/");
            }, 2000)
        }
    }, [error, history])

  return (
    <div>
        {isLoading && <div>Loading....</div>}
        {error && <div>{error}</div>}
        {article && (
            <div>
                <h2>{article.title}</h2>
                <p>By: {article.author}</p>
                <p>{article.body}</p>
            </div>
        )}
    </div>
  )
}
