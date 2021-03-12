import React, { useState } from 'react'
import MoviePosters from './MoviePosters'

const PageNav = ({ numOfPosters, sorted, genre }) => {
    const [firstPoster, setFirstPoster] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    const handlePage = (e) => {
        e.preventDefault()
        const number = parseInt(e.target.innerText) - 1
        setCurrentPage(number)
        setFirstPoster(numOfPosters * number)
    }

    const prevPage = (e) => {
        e.preventDefault()
        if (currentPage > 0) {
            const number = currentPage - 1;
            setCurrentPage(number)
            setFirstPoster(numOfPosters * number)
        }
    }
    const nextPage = (e) => {
        e.preventDefault()
        const number = currentPage + 1;
        setCurrentPage(number)
        setFirstPoster(numOfPosters * number)
    }

    return (
        <>
            <MoviePosters firstPoster={firstPoster} numOfPosters={numOfPosters} sorted={sorted} genre={genre} />
            <div className="page-nav">
                <ul>
                    <li className="prev-page"><span onClick={prevPage}>&lsaquo;</span></li>
                    <li><span>...</span></li>
                    <li><span onClick={handlePage}>1</span></li>
                    <li><span onClick={handlePage}>2</span></li>
                    <li><span onClick={handlePage}>3</span></li>
                    <li><span onClick={handlePage}>4</span></li>
                    <li><span onClick={handlePage}>5</span></li>
                    <li><span>...</span></li>
                    <li className="next-page"><span onClick={nextPage}>&rsaquo;</span></li>
                </ul>
            </div>
        </>
    )
}

export default PageNav