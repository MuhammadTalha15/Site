import React from 'react'
import '../styles/smoothscroll.css'

const SmoothscrollBtn = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <button onClick={scrollTop} className='smoothscroll'>
                <div className="ico"></div>
            </button>
        </>
    )
}
import '../styles/smoothscroll.css'

export default SmoothscrollBtn
