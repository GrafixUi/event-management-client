import useAxiosAuth from "../../utils/useAxiosAuth";
import { useEffect, useState } from "react"
export default function ProfileCard() {
    const [items, setItems] = useState([]);
    const axiosAuth = useAxiosAuth();
    
    useEffect(() => {
        const upcomingDataNew = async () => {
          try {
            const upcomingEvents = await axiosAuth.get(
              `${process.env.REACT_APP_BACKENDURL}/users/me`
            );
            setItems(upcomingEvents.data);
            
          } catch (err) {
            console.log(err);
          }
        };
        upcomingDataNew();
      },[])

      console.log(items);
    return(
        <div>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <div >
        <h5 class="mb-2  font-normal text-gray-500 dark:text-gray-400">Username: {items.username}</h5>
    </div>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Email: {items.email}</p>
    
</div>
        </div>
    )
}