interface Props {
    image: string
    title: string
}
const MovieCard = ({ image, title }: Props) => {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <section className="flex flex-col gap-3">
            <img className="w-[120px] md:w-[300px] rounded-md hover:scale-105  duration-300 hover:border-gray-400 cursor-pointer hover:shadow-[#2d507c] hover:shadow-lg" src={`${IMAGE_BASE_URL}${image}`} alt="" />
            <p className="w-[120px] md:w-[300px] text-white font-semibold">{title}</p>
        </section>
    )
}
export default MovieCard