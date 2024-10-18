export default function PDFCard({ name, url, year, season }) {

    return (
        <div className='card'>
            {/* <p className='card__name'>{name}</p> */}
            <p className='card__year'>
                <span className='card__year__season'>{season}</span>
                <span className='card__year_year'>{year}</span>
            </p>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 79">
                <path className={`st0 ${season} card__logo__shape`} fill="none" d="M41.71 0.92L41.7102 0.92C53.2588 0.915039 62.0076 4.13024 67.8735 10.2692C73.743 16.412 76.8 25.5593 76.8 37.57V78.48H50.22C31.4472 78.48 23.2907 77.1395 13.5689 70.735C5.25456 65.0399 0.580002 54.26 0.580002 40.04C0.580002 30.2955 3.79046 20.5172 10.5197 13.1805C17.2411 5.85231 27.5093 0.92 41.71 0.92Z"></path>
            </svg>
            <a href={url} target='_blank'></a>
        </div>
    )
}