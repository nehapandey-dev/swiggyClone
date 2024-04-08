
import AllCards from './AllCards'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import useRestaurants from '../utils/useRestaurants'

function Body() {
  const listOfRestaurants = useRestaurants()
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1> You are offline</h1>

  if (listOfRestaurants.length === 0) {
    return <h1 className='mx-5'>Loading...</h1>
  }

  return (
    <div className="card rounded">
      <div className="box d-flex flex-wrap w-100 gap-5 justify-content-center">
        {
          listOfRestaurants.map((res) => (
            <Link to={'/resturants/'+ res.info.id} key={res.info.id} className='text-decoration-none'><AllCards resData={res} /></Link>
          ))
        }

      </div>
    </div>
  );
}

export default Body