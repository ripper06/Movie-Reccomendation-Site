import React from 'react'

const HorizontalCards = ({data}) => {
  return (

        <div className='w-[100%] flex overflow-y-hidden mb-5 p-5'>

            {data.map((d,i)=> (
                <div key={i} className='min-w-[15%] bg-zinc-900 mr-5 mb-5'>
                    <img 
                    className='w-full h-[50%] object-cover'
                    src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt="" />

                    <div className='text-white p-3 h-[50%] overflow-y-scroll'>
                        <h1 className='text-lg font-semibold '>
                                {d.name ||
                                d.title || 
                                d.original_name || 
                                d.original_title }
                        </h1>

                        <p className="text-sm">
                            {d.overview.slice(0,30)}...
                            <span className="text-zinc-500">more</span>
                        </p> 
                    </div>
                </div>
        ))}

        </div>
  )
}

export default HorizontalCards;

