import { useEffect,useState } from "react"
import {Menu_API} from "../utils/constants"

const useRestroMenu = (resId) =>{
    const [resMenu, setResMenuData] = useState(null)
    // fetch data
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(Menu_API + resId)
        const json = await data.json();
        setResMenuData(json?.data)
        // console.log(json?.data?.cards[0]?.card?.card?.info)
    
        // console.log(resMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
      }
    return resMenu
    
}

export default useRestroMenu