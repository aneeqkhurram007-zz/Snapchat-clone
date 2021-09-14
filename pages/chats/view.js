import { useStateValue } from '../../context/StateProvider'
import router from 'next/router'
import { useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const ChatView = () => {
    const [{ selectedImage }] = useStateValue()
    const exit = () => {
        router.replace('/chats')
    }
    useEffect(() => {
        if (!selectedImage) {
            exit();
        }
    }, [selectedImage])

    return (
        <>
            <div className="chatView">
                <img src={selectedImage} alt="selected" onClick={exit} />
                <div className="chatView__timer">
                    <CountdownCircleTimer
                        isPlaying
                        duration={10}
                        strokeWidth={6}
                        size={50}
                        colors={[
                            ["#004777", 0.33], ["#F7B801", 0.33], ["#A30000", 0.33]
                        ]}
                    >
                        {({ remainingTime }) => {
                            if (remainingTime === 0) exit()
                            return remainingTime
                        }}
                    </CountdownCircleTimer>
                </div>

            </div>
        </>
    )
}

export default ChatView
