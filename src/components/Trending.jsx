import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import axios from '../utils/axios'
import Cards from './Partials/cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component'

const Trending = () => {
    const navigate = useNavigate()
    const [catagory,setCatagory] = useState("all");
    const [duration,setDuration] = useState("day");
    const [trending,setTrending] = useState([]);
    const [Page,setPage] = useState(1);
    const [hasMore,sethasMore] = useState(true);

    const GetTrending = async () => {

        try{
        const {data} = await axios.get(`/trending/${catagory}/${duration}?page=${Page}`);

          if(data.results.length > 0){
            // setTrending(data.results);
            setTrending((prevState)=>[...prevState, ...data.results])
            setPage(Page+1);
          }else{
              sethasMore(false);
          }
        } 

        catch(error){
        console.log("Error : ", error)
        }

      };

      const refreshHandler = () =>{
        if(trending.length === 0) GetTrending();
        else {
          setTrending([])
          setPage(1);
          GetTrending();
        }
      }

      useEffect(()=>{
        refreshHandler();
        GetTrending();
      },[catagory,duration])

  return trending.length>0 ? (
    <div className='w-screen h-screen'>
            <div className='px-[5%] w-full flex items-center justify-between'>
                
                <h1 className='w-[20%] text-2xl font-semibold text-zinc-400 '>
                    <i 
                    onClick={()=> navigate(-1)} 
                    className ="hover:text-[#6556cd] ri-arrow-left-fill"></i>
                    Trending
                </h1>

                <div className='flex items-center w-[80%]'>
                        <Topnav/>
                        <Dropdown 
                            title="catagory" 
                            options={["movie","tv","all"]} 
                            func={(e)=>setCatagory(e.target.value)}/>
                        
                        <div className='w-[2%]'></div>

                        <Dropdown 
                            title="Duration" 
                            options={["week","day"]} 
                            func={(e)=>setDuration(e.target.value)}/>
                </div>
                
            </div>

            <InfiniteScroll
            dataLength={trending.length}
            next={GetTrending}
            hasMore={hasMore}
            loader={ <h1>LOADING...</h1> }
            >
                  <Cards data={trending} title={catagory} />
            </InfiniteScroll>
    
    </div>
  ) : (<Loading/>)
}

export default Trending
