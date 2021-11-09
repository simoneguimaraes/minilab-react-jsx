let emotion = 'happy'

function EmotionMeter() {
    return (
        emotion === 'happy' ? <i class="far fa-smile-wink"></i> : <i class="far fa-sad-tear"></i> 
    )
}

export default EmotionMeter;