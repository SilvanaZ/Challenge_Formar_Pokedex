import './Home.scss'
import { useState} from 'react'
import { Search } from './Search/Search'
import { useTranslation } from 'react-i18next'

//////////////////////////////////////////////////
export const Home = () => {

  //ESTADO PARA CONTROLAR SI EL VIDEO ESTA MUTEADO
  const [isMutedVideo, setIsMutedVideo] = useState<boolean>(true)

  //FUNCION PARA ACTIVAR/DESACTIVAR AUDIO DEL VIDEO
  const sonidoCambiar = (valor:boolean) => {
    setIsMutedVideo(valor)
  }



  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  const {t} = useTranslation()

  //////////////////////////////////////////////////
  return (
    <section className='caja-busqueda'>

      {/* VIDEO DE FONDO */}
      
      {/* LETRA BUSCAR - ICONO SILENCIAR */}
      <section className='busqueda__frase'>

        {t('Busca tu pokemón')}

        <span className='caja-de-volumen'>
          {
            !isMutedVideo
              ? <i className='fa-solid fa-volume-high' onClick={()=>sonidoCambiar(true)}></i>
              : <i className='fa-solid fa-volume-xmark' onClick={()=>sonidoCambiar(false)}></i>
          }
        </span>
      </section>

      {/* BUSCADOR Y CONTENEDOR DE COINCIDENCIAS */}
      <Search/>

    </section>
  )
}
