import React, { useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

function ResultModal({ ref, onReset, targetTime, remainingTime }) {
    const dialog = useRef()

    const userLost = remainingTime <= 0
    const remainingTimeFormatted = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - (remainingTime / (targetTime * 1000))) * 100)
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className='result-modal' onClose={onReset} >
            {userLost ? <h2>You lost</h2> : <h2>Your Score: {score}</h2>}
            <p>That target time was <strong>{targetTime} seconds.</strong> </p>
            <p>You stopped Timer with <strong>{remainingTimeFormatted} seconds left</strong>  </p>
            <form method='dialog'>
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}

export default ResultModal