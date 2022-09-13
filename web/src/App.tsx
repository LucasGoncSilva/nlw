import './styles/main.css'
import imgLogo from './assets/logo-nlw-esports.png'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center my-20'>

      <img src={imgLogo} alt="logo" className='w-60' />

      <h1 className='text-6xl text-white font-black mt-20 mb-16'>
        Seu <span className='text-transparent bg-gradientDUO bg-clip-text'>duo</span> está aqui!
      </h1>

      <div className='grid grid-cols-6 gap-6'>
        <a href="#" className='relative overflow-hidden rounded-lg'>
          <img src="/game-1.png" alt="game image" />

          <div className='absolute bottom-0 right-0 left-0 w-full pt-32 px-4 pb-4 bg-gradientBanner'>
            <strong className='text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>x anúncios</span>
          </div>
        </a>

        <a href="#" className='relative overflow-hidden rounded-lg'>
          <img src="/game-2.png" alt="game image" />

          <div className='absolute bottom-0 right-0 left-0 w-full pt-32 px-4 pb-4 bg-gradientBanner'>
            <strong className='text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>x anúncios</span>
          </div>
        </a>

        <a href="#" className='relative overflow-hidden rounded-lg'>
          <img src="/game-3.png" alt="game image" />

          <div className='absolute bottom-0 right-0 left-0 w-full pt-32 px-4 pb-4 bg-gradientBanner'>
            <strong className='text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>x anúncios</span>
          </div>
        </a>

        <a href="#" className='relative overflow-hidden rounded-lg'>
          <img src="/game-4.png" alt="game image" />

          <div className='absolute bottom-0 right-0 left-0 w-full pt-32 px-4 pb-4 bg-gradientBanner'>
            <strong className='text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>x anúncios</span>
          </div>
        </a>

        <a href="#" className='relative overflow-hidden rounded-lg'>
          <img src="/game-5.png" alt="game image" />

          <div className='absolute bottom-0 right-0 left-0 w-full pt-32 px-4 pb-4 bg-gradientBanner'>
            <strong className='text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>x anúncios</span>
          </div>
        </a>

        <a href="#" className='relative overflow-hidden rounded-lg'>
          <img src="/game-6.png" alt="game image" />

          <div className='absolute bottom-0 right-0 left-0 w-full pt-32 px-4 pb-4 bg-gradientBanner'>
            <strong className='text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>x anúncios</span>
          </div>
        </a>
      </div>

      <div className='mt-8 pt-1 bg-gradientDUO self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2a2634] self-stretch px-8 py-6 flex justify-between'>

          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='bg-violet-500 hover:bg-violet-700 transition-colors py-3 px-4 text-white rounded flex gap-3 items-center'>
            <MagnifyingGlassPlus size={24}/> Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
