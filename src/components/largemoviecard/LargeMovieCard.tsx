interface Props {
    image: string
    title: string
}
const LargeMovieCard = ({ image, title }: Props) => {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <section className="flex flex-col gap-3">
            <img className="w-[150px] md:w-[400px] cursor-pointer hover:scale-105  duration-300 hover:border-gray-400 hover:shadow-[#062863] hover:shadow-xl" src={`${IMAGE_BASE_URL}${image}`} alt="" />
            <p className="w-[120px] md:w-[200px] text-white font-semibold">{title}</p>
        </section>
    )
}

export default LargeMovieCard