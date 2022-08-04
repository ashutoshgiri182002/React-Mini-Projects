import { useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import './MainPage.css'

const MainPage = () => {

    const [showList, setShowList] = useState([]);

    useEffect(() => {
      axios.get('https://api.tvmaze.com/search/shows?q=all')
        .then(response => {
           
            setShowList(response.data);
            // console.log(response.data);
        })
  
        .catch(error => {
          console.log(error);
        });
      
  
    }, []);


    return (
        <>
            <div className="main">
                <div className="main-header">
                    <h1>Select Your Shows</h1>

                    <form action="">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">Search</button>
                    </form>

                </div>

                <div className="main-content">
                  
                    {showList.map(item => (
                        <Card key={item.show.id} item={item} />
                    ))}

                </div>
            </div>

        </>
    )
}

export default MainPage