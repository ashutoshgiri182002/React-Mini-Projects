import { useEffect , useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './ShowPage.css'


export const ShowPage = () => {

    const { show_id } = useParams();
    // console.log("show_id: ",show_id);

    const [currentShow, setCurrentShow] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
        const getShow = async () => {
            const {data}  = await axios(`https://api.tvmaze.com/shows/${show_id}`);
            // console.log("Data",data);
            setCurrentShow(data);
            setLoading(false);
        };
        getShow();
      
    }, [show_id]);
    


    return (
        <>
            {loading ? <h1>Loading...</h1> : (

                <div className="show-page">
                    <div className="info">
                        <div className="show-img">
                            <img src={currentShow.image.original} alt="" />
                        </div>

                        <div className="show-info">

                            <div className="show-header">
                                <h1>{currentShow.name}</h1>
                                <h1>{currentShow.rating.average}/10</h1>
                            </div>


                            <div className="span">
                                <span>{currentShow.premiered}</span>
                                <span>{currentShow.schedule.time}</span>
                                <span>{currentShow.language}</span>
                            </div>

                            {currentShow.summary}

                            <div className="span1">
                                <span>Official Site: <a href={currentShow.url} target="_blank" rel="noreferrer">{currentShow.url}</a> </span>
                                <span>Genres: {currentShow.genres}</span>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default ShowPage