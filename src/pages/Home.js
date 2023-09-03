import React from 'react'

const Home = () => {

  const Musicdata = [
    {id:1, date:'11-20-2022', artist:'Honey Singh', song:'Blue eyes' },
    {id:2, date:'11-20-2021', artist:'Emmiway Bantai', song:'baby come down' },
    {id:3, date:'11-20-2023', artist:'Deno James', song:'Looser' }
]
  return (
    <>
    <main className="min-h-screen my-52 ">
  <div className='text-right flex  justify-center bg-slate-white'>
    <h1 className='text-slate-950'><span className='text-8xl border-b-4  border-red-500 w-4 animate-pulse '>Welcome</span>  <br/> <br/><span className='text-lg font-semibold '>To Our Page</span>
    </h1>
    
  </div>
  <div className=' flex  justify-center bg-slate-white mt-20'>
   <button className='border-slate-950 border-2 py-3 px-5 rounded-lg bg-gray-900 text-slate-50  hover:bg-slate-50 hover:text-slate-950 transition-all duration-300'>Get our Latest Album</button>
  
  </div>
  <div className=' flex  justify-center bg-slate-white mt-10 border-2 borde-slate-950 rounded-full   mx-auto w-20  h-20 items-center animate-bounce shadow-2xl bg-red-400 shadow-slate-900 text-white cursor-default'>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd"/>
</svg>
  </div>

    <h1 className='text-center mt-20 font-medium text-2xl border-b-4 w-10 mx-auto border-red-400'>TOURS</h1>
    <div className='overflow-x-auto max-w-7xl mx-auto'>
  <table className='w-full text-center mt-8 text-md text-slate-700 mx-auto font-semibold'>
    {Musicdata.map((item) => (
      <tr className='border-b-2 border-red-400' key={item.id}>
        <td className=''>{item.date}</td>
        <td className='py-5 text-center'>{item.artist}</td>
        <td className='py-5 text-center'>{item.song}</td>
        <td className='py-5 text-center'>
          <button className='uppercase border-2 text-slate-50 py-2 px-5 rounded-lg bg-red-400 shadow-sm transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 shadow-slate-900 hover:bg-slate-950'>
            Buy Tickets
          </button>
        </td>
      </tr>
    ))}
  </table>
</div>


     
    
     
        
  
    </main>
    
    
    
    
    </>
  )
}

export default Home