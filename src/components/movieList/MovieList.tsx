import { useEffect, useState, useRef } from "react";
import globalApi from "../../services/globalApi";
import MovieCard from "../movieCard/MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import LargeMovieCard from "../largemoviecard/LargeMovieCard";
const dimensionScreen = window.innerWidth;
interface genreProps {
    id: number
}

const MovieList = ({ id }: genreProps) => {
    const [list, setList] = useState([]);
    const { getMovieByGenreID } = globalApi
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getMovieByGenreID(id).then(res => setList(res.data.results))
    }, [id, getMovieByGenreID])
    const slideRight = () => {
        if (elementRef.current) {
            console.log(elementRef.current.scrollLeft)
            elementRef.current.scrollLeft += dimensionScreen ;
        }
    }
    const slideLeft = () => {
        if (elementRef.current) {
            console.log(elementRef.current.scrollLeft)
            elementRef.current.scrollLeft -= dimensionScreen ;
        }
    }

    return (
        <div className="w-full">
            <HiChevronLeft className='hidden md:block text-white absolute left-5 mt-24   cursor-pointer opacity-80 hover:opacity-100 duration-150 z-[1]' size={70} onClick={() => slideLeft()} />

            <HiChevronRight className='hidden md:block text-white absolute mx-8 mt-24 cursor-pointer right-0 opacity-80 hover:opacity-100 duration-150 z-[1]' size={70} onClick={() => slideRight()} />

            <div
                ref={elementRef}
                className="flex gap-8 w-full overflow-x-auto scrollbar-none px-5 py-11 scroll-smooth  ">
                {id % 3 === 0 ?
                    <>
                        {list.map((item, index) => (
                            <LargeMovieCard
                                key={index}
                                title={item['title']}
                                image={item['poster_path']}
                            />
                        ))}
                    </> : <>
                        {list.map((item, index) => (
                            <MovieCard
                                title={item['title']}
                                key={index}
                                image={item['backdrop_path']}
                            />
                        ))}
                    </>}
            </div>
        </div>

    )
}

export default MovieList
