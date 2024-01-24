import React from 'react'
import { Link } from 'react-router-dom';
import useAxiosAuth from '../../utils/useAxiosAuth';
import {
    useStore
} from "../../utils/store";
import { useEffect,useState } from 'react';
const Dashboard = () => {

const axiosAuth = useAxiosAuth();
const userid = useStore((state) => state.userData.id);
const [items, setItems] = useState([]);

useEffect(() => {
    const upcomingDataNew = async () => {
      try {
        const upcomingEvents = await axiosAuth.get(
          `${process.env.REACT_APP_BACKENDURL}/orders?filters[userid][$eq]=${userid}`
        );
        setItems(upcomingEvents.data.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    upcomingDataNew();
  }, []);
    return (
        <div>
            <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-center mt-6 max-md:max-w-full max-md:mt-10">
                    <div className="text-slate-700 text-3xl font-bold leading-10 tracking-normal self-stretch max-md:max-w-full">
                        Your Ticket sold
                    </div>
<div class="ml-20 mt-5 w-full">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Event/Movie name
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Number of Tickets
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            {
                items.map((item) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item?.attributes?.name}
                </th>
                <td class="px-6 py-4">
                    {item?.attributes?.ticketquantity}
                </td>
                <td class="px-6 py-4">
                    ${item?.attributes?.totalprice}
                </td>
            </tr>
                ))
            }
             
        </tbody>
    </table>
</div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
