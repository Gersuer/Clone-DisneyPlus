import { useEffect, useRef, useState } from "react"
import globalApi from "../../services/globalApi"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/"
const dimensionScreen = window.innerWidth;
const BigSlide = () => {

    // movieList vai ser um estado que irá guardar as informações da requisição dos filmes.
    const [movieList, setMovieList] = useState([])
    // O elementRef irá servir para podermos montar o slide e termos ele como referencia do tamanho da tela.
    const elementRef = useRef<HTMLDivElement>(null);

    // O getTrendingMovie, irá trazer o resultado da requisição que está sendo feita no arquivo da pasta services e armazena o resultado no estado movieList
    const getTrendingMovie = () => {
        try {
            globalApi.gettrendingVideos.then(res => setMovieList(res.data.results));

        } catch (err) {
            console.log(err)
        }
    }
    // O useEffect irá servir para caso os trending movies mudem, o slide manter a lista de filmes atualizada.
    useEffect(() => {
        getTrendingMovie()
    }, [])


    //Essa função vai ser responsável por fazer o slide "girar" para direita.
    const slideRight = () => {
        // Ele pega o elemento de referencia e associa à propriedade scrollLeft, essa prorpiedade define o número de pixels que um condeúdo é rolado para esquerda, por isso já foi pego a base da dimensão do elemento apresentavel na variável dimensionScreen = window.innerwidth
        if (elementRef.current) {
            console.log(elementRef.current.scrollLeft)
            console.log(dimensionScreen)

            elementRef.current.scrollLeft += dimensionScreen;
        }
    }
    // O mesmo serve para o slideLeft, irá rolar o conteúdo para esquerda.
    const slideLeft = () => {
        if (elementRef.current) {
            console.log(elementRef.current.scrollLeft)
            console.log(dimensionScreen)
            elementRef.current.scrollLeft -= dimensionScreen;
        }
    }

    return (
        <div>
            {/* De inicio temos dois icones de setas, para podermos rolar o slide, esses icones terão que aparecer somente em resoluções mais altas, sendo assim começam com a propriedade hidden e quando for no mínimo uma tela de 768px eles aparecem. */}
            <HiChevronLeft className='hidden md:block text-white absolute mx-8 mt-48 cursor-pointer opacity-50 hover:opacity-100 hover:duration-150' size={70} onClick={() => slideLeft()} />

            <HiChevronRight className='hidden md:block text-white absolute mx-8 mt-48 cursor-pointer right-0 opacity-50 hover:opacity-100 hover:duration-150' size={70} onClick={() => slideRight()} />

            {/* Essa é a div que irá comportar nosso slide, será display flex para que as imagens fiquem uma ao lado da outra, no entanto vai gerar uma barra de rolagem e não queremos isso, sendo assim iremos colocar a regra scrollbar-none que irá fazer a barra horizontal desaparecer e colocaremos overflow-x-auto para que as imagens não ultrapassem o tamanho da tela. Para que elas não fiquem grudadas uma nas outras iremos dar um gap e um padding no eixo x. Essa div vai ser nosso elemento de referencia, ou seja, é dela que iremos pegar fazer rolar ao pressionarmos as setinhas. */}
            <div className="flex overflow-x-auto w-full py-4 scrollbar-none scroll-smooth gap-5 px-5" ref={elementRef}>

                {/* Aqui temos a lista de filmes que estão entre os melhores */}
                {movieList && movieList.map((item, index) => (
                    <img
                        className="min-w-full md:w-full mr-5 md:mr-0 md:h-[400px] object-cover object-left-top rounded-md md:rounded-lg hover:border-[4px] border-zinc-300 duration-150 ease-in"
                        key={index}
                        src={`${IMAGE_BASE_URL}${item['backdrop_path']}`} alt="background_movie" />
                ))}
            </div>
        </div>
    )
}

export default BigSlide
