import React from 'react'

const Messages = () => {
  return (
    <div className='flex items-center justify-start min-w-[450px] rounded-lg bg-def_blue_gray p-4 font-FiraMono'>
        <div className="messages_heading w-full font-medium text-lg"> Messages</div>
        <div className="message_grp"></div>
        <div className="close_icon w-full flex items-center justify-center"></div>
    </div>
  )
}


const _MessageBox = () => {
    return <div className='w-full px-3 py-2 rounded-md'></div>
}

export default Messages