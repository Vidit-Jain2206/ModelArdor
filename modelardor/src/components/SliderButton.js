import React from 'react'

const SliderButton = (props) => {
  return (
    <div className='h-[9px] w-[9px] ml-[0.2rem]'>
        <div className={"border-[1px] border-black rounded-full h-full w-full" + props.className} onClick={props.action}></div>
    </div>
  )
}

export default SliderButton
