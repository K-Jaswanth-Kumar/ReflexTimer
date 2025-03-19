import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal'

// let timer;
function TimerChallenge({ title, targetTime }) {
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000)

    const timerActive = remainingTime > 0 && remainingTime < targetTime * 1000
    const timer = useRef()
    const dialog = useRef()


    if (remainingTime <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
        }, 10)
    }

    function handleReset() {
        setRemainingTime(targetTime * 1000)
    }

    function handleStop() {
        clearTimeout(timer.current)
        dialog.current.open()
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={remainingTime} onReset={handleReset} />
            <section className='challenge'>
                <h2>{title}</h2>
                {remainingTime <= 0 && <p>You lost!</p>}
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerActive ? handleStop : handleStart}>
                        {timerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerActive ? 'active' : undefined}>
                    {timerActive ? 'Time is running...' : 'TImer Inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge