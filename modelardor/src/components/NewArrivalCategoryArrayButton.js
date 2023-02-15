import React from 'react'

function NewArrivalCategoryArrayButton(props) {
  return (
    <div className={"border-2 border-black rounded-full ml-2 mt-1" + props.className}>
      <button className={"px-5 py-2 text-sm rounded-full" + props.className} onClick={props.action}>{props.name}</button>
    </div>
  )
}

export default NewArrivalCategoryArrayButton
