//Logo DisneyPlus and profile image
import logo from '../../assets/images/disneylogo.png'
import profile from '../../assets/images/profile.png'

//All usefull icons from react icons
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';
import { useState } from 'react';

const Header = () => {
  //Quando a aplicação estiver em resoluções mais baixas, como celulares e tablets, vai ser necessário que o menu completo suma com algumas opções e apareça 3 pontinhos que ao clicar, o resto das informações irá aparecer, por isso a criação do toogle, para aparecer o restante do menu.
  const [toggle, setToggle] = useState(false);

  //Ao invés de criar vários li para cada um dos itens de menu, foi criado um array de objetos para conter tanto o item do menu quanto o icone que representa aquele item.
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'PLUS',
      icon: HiPlus
    },
    {
      name: 'WATCH LIST',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]
  return (
    // Essa div é o header, nela vamos ter uma div que vai conter a logo, a div onde estarão os menus e por ultimo a imagem do profile.
    <div className='flex items-center justify-between p-5'>

      {/* Essa div vai englobar a logo e o menu. */}
      <div className='flex gap-8 items-center'>

        {/* Logo do header */}
        <img
          className='w-[90px] object-cover md:w-[115px]'
          src={logo}
          alt="logo" />

        {/* Nesse menu, caso estejamos em uma tela com resolução alta, como uma tv ou desktop, o menu irá aparecer por completo com todos os itens. */}
        <div className='hidden md:flex gap-8'>
          {menu.map((item, index) => (
            <div key={index}>
              {/* Chama o componente onde renderiza os itens com o ícone alinhados horizontalmente */}
              <HeaderItems name={item.name} Icon={item.icon} />
            </div>
          ))}
        </div>
        {/* Esse nenu é para os casos de MObile e tablets, são resoluções mais baixas, aqui iremos apresentar até 3 itens e o restante se dará através de um toogle */}
        <div className='flex md:hidden gap-5'>

          {/* Irá renderizar no máximo 3 itens para resuluções menores */}
          {menu.map((item, index) => index < 3 && (
            <div key={index}>
              {/* No caso mobile não queremos que o nome do item apareça, apenas seu ícone, sendo assim dentro da propriedade name enviamos uma string vazia. */}
              <HeaderItems name={''} Icon={item.icon} />
            </div>
          ))}
          
          {/* Após renderizar os 3 icones acima, precisamos renderizar o icone onde estará o restante do menu, sendo assim criamos uma div para colocar esse icone dentro e uma outra div que irá comportar o restante dos itens. */}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItems name={''} Icon={HiDotsVertical} />

            {/* Caso o usuário clique no icone dos 3 pontinhos o toogle vai alterar de false para true e irá aparecer uma caixinha com o restante dos menus */}
            {toggle ?
              <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 rounded border-gray-600 px-5 py-4'>
                {menu.map((item, index) => index >= 3 && (
                  <HeaderItems key={index} name={item.name} Icon={item.icon} />
                ))}
              </div> : null
            }
          </div>
        </div>
      </div>
      {/* Por fim, temos a imagem do profile do usuário. */}
      <img
        className='w-[40px]'
        src={profile}
        alt="profile-picture" />
    </div>
  )
}

export default Header
