import { useEffect, useState} from 'react';



const Video = (props) => {
    
    const [rate, setRate] = useState(0); // HOOK
    


    const rateVideo = () => {
        
        setRate(rate + 1)

    }

    useEffect(() => {

        console.log('ups se a montado el DOM el component');

    }, [rate])


    return(

        <div className='video-container'>
        <div className='video-image'>
        <img src={props.thumbnail} alt='imagen' />
        </div>
        <div className='video-info'>
          <h3 >{props.title}</h3>
          <span>This video has {rate} stars </span> | <button onClick={rateVideo}>Rate this Product</button>
          <p>Date: {props.date}</p>
          <button onClick={props.deleteVideo}>Delete this Product</button>

        </div>

    </div>



    )

}

export default Video;