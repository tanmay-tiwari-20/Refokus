import React from 'react'

function Marquee({imagesurl}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesurl.map(url => <img src={url} className='w-[7vw] flex-shrink-0' />)}
        {imagesurl.map(url => <img src={url} className='w-[7vw] flex-shrink-0' />)}
    </div>
  )
}

export default Marquee