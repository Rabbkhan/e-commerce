import React from 'react'
import { Link } from 'react-router-dom'
const FooterSection = () => {
  return (
    <>

<footer className='bg-slate-950 text-slate-300 -my-2 p-4  px-10 h-auto lg:flex justify-between ' >
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kAGOsH_Ii8laBPk-udCuJ7DNHPoinI6d6w&usqp=CAU' className='w-28 h-28 ' alt=''/>
      <div>
        <h1 className='border-b-2 border-red-500 my-2 w-6'>Header</h1>
      <ul>
       <li className=' my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6'><Link to={"/"}>Home</Link></li>
        <li className=' my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6'><Link to={"/store"}>Store</Link></li>
        <li className=' my-3 transition ease-in-out hover:translate-y-1 hover:border-b-2 hover:scale-110 duration-300 border-red-500 w-6'><Link to={"/about"}>About</Link></li>
      </ul>
      </div>
      <div className='w-96'>
        <h1 className='border-b-2 w-6 border-red-500 my-3'>Address</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur quo tempora quod soluta atque itaque. Cumque voluptas, repellendus, reprehenderit asperiores quidem ex nisi aliquam tenetur ullam dicta, voluptate at.
        </p>
      </div>
      <div className="w-100 h-60">
      <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.453670601685!2d88.34214537575603!3d22.59952792654384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277dcb5577abf%3A0x627f262a3830e698!2sD-WEB%20CONSULTANTS%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1693705874219!5m2!1sen!2sin"
            title='location map'
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
           referrerPolicy="no-referrer-when-downgrade">
            
           </iframe>
      </div>
    </footer>

    </>
  )
}

export default FooterSection