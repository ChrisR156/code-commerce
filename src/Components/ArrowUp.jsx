import React from 'react'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'

// var arrowHide = document.getElementById('jumberi')

    //Z indexi reactshi agaraa xo sachiro
    //transitionis gasworeba
    //im arasworis kodi yarnit rogor gavushva ise ro chemi gashvebuli ikos calke

  //ro mamovchri scripts reacti mushaobs da mere ro chavakopireb chveulebrivad agzelebs mushaobas

const ArrowUp = () => {

    
  window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 50){
        document.getElementById('jumberi').style.opacity = '1'
        document.getElementById('jumberi').style.cursor = 'pointer'
    } else {
        document.getElementById('jumberi').style.opacity = '0'
        document.getElementById('jumberi').style.cursor = 'default'
    }
})

let scrollClick = document.getElementById('jumberi')

scrollClick.addEventListener('click', (e)=>{
    if(e){
        window.scrollTo({top:0, behavior:'smooth'})
    }
})

   



  return (
    <div id='jumberi' className='opacity-0 z-50 cursor-pointer hover:text-black duration-[400ms] ease-in-out h-[50px] lg:h-[75px] w-[50px] lg:w-[75px] bg-[#00df9a] fixed ml-[90%] mt-[560px] rounded-[100%] flex items-center justify-center'>
      <MdOutlineKeyboardArrowUp className='text-[40px] lg:text-[50px]' />
    </div>
  )
}

export default ArrowUp
