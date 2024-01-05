import disney from '../../assets/images/disney.png'
import marvel from '../../assets/images/marvel.png'
import nationalG from '../../assets/images/nationalG.png'
import pixar from '../../assets/images/pixar.png'
import starwar from '../../assets/images/starwar.png'

import starwarV from '../../assets/videos/star-wars.mp4'
import disneyV from '../../assets/videos/disney.mp4'
import marvelV from '../../assets/videos/marvel.mp4'
import nationalGographicV from '../../assets/videos/national-geographic.mp4'
import pixarV from '../../assets/videos/pixar.mp4'

// Nessa sessão iremos aprensentar pequenos cards de produções
const Production = () => {
    // Começamos criando uma array de objetos que irá guardar as informações sobre as produções, como id, imagem e um video curto.
    const productionList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: pixar,
            video: pixarV
        },
        {
            id: 3,
            image: marvel,
            video: marvelV
        },
        {
            id: 4,
            image: starwar,
            video: starwarV
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGographicV
        }
    ]
    return (
        // Essa div irá comportar todos os nossos cards
        <div className='flex gap-2 md:gap-5 px-5 md:px-16'>
            {productionList.map((item) => (
                // Para cada item dentro da nossa lista de produção iremos criar um cardzinho com uma imagem e um vídeo.
                <div key={item.id} className=' relative border-[1px] hover:cursor-pointer rounded-lg hover:scale-110 transition-all duration-200 shadow-xl shadow-black'>
                    {/* O video precisa estar por baixo da imagem por isso iremos coloca-lo no z-index = 0 e a imagem 2 camadas acima. */}
                    <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-lg z-0 opacity-0 hover:opacity-80 hover:border-[2px]' />
                    <img className='z-[2]' src={item.image} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Production
