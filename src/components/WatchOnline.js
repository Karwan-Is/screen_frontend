import React, {useState, useEffect} from 'react'

const Watch = (props) => {
    const [movie, setMovie] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch('/movie/' + props.match.params.id)
            .then(res => res.json())
            .then(movies => {
                setMovie(movies)
                setIsLoading(true)
            });
    }, [props.match.params.id])

    return (
        <div className="player">
            {isLoading ? <iframe src={movie.trailer} frameBorder="0" title="Watch Online" allowFullScreen></iframe> : <h1>Loading...</h1> }
        </div>
    )
}

export default Watch