import{statistics}from'@/component/statistics'
const home=()=>{
    return(<main className="bg-white w-screen h-screen relative">
   <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                <img src="/images/nike-removebg-preview.png" alt="" className="size-24"/> 
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg text-white">
                    <a href="/home">
                    <li className="bg-red-300 px-4 py-2 rounded-lg text-gray-500">home</li>
                    </a>
                    <a href="/">
                    <li className="bg-red-300 px-4 py-2 rounded-lg text-gray-500">About us</li>
                    </a>
                    <a href="/">
                    <li className="bg-red-300 px-4 py-2 rounded-lg text-gray-500">Products</li>
                    </a>
                    <a href="/">
                    <li className="bg-red-300 px-4 py-2 rounded-lg text-gray-500">Contact us</li>
                    </a>
                    <a href="/">
                    <li className="bg-red-300 px-4 py-2 rounded-lg text-gray-500">sign in/explore now</li>
                    </a>
                </ul>
                <a href="/">
<img src="/images/hamburger-removebg-preview.png" alt="" className="size-16 mr-4"/>
                </a>
            </nav>
        </header>
        <section className="xl:p-1 wide:pr-8 pb-12 w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-600">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max:padding-x pt-28">
            <p className="text-lg font-montserrat text-red-300">our summer collection</p>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
                 <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival</span>
                  <break/>
                  <span className="text-red-500 inline-block mt-3">Nike </span> shoes
                  
            </h1>
           <p className="font-montserrat text-gray-500  text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                discover stylish nike arrivals,Quality,comfort and innovation for your active life
           </p>
           <button className=" flex justify-center items-center gap-2 bg-red-400 px-7 py-4 rounded-full border font-montserrat text-lg leading-none text-white  border-red-600">
                shop now <span className=" ">&rarr;</span> 
               
           </button>
           <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                   {statistics.map((stat,
                   index)=>(
                     <div>
                          <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                          <p className='leading-7 font-montserrat text-gray-500'>{stat.label}</p>
                          
                     </div>
                   )
                )}
           </div>
        </div>
       <div className=' bg-blue-50  relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center '>
           
           
          
      
           
           <img src='/images/sandal-removebg-preview.png'
            className='object-contain relative mb-48'
            width={500}
            height={630}
             
           />
           
           <div className=' flex mt-96 justify-center py-4 items-centert  sm:gap-6 gap-4 absolute -bottom -[10%] mt-20 sm:left-[10%] max-sm:px-6'>
                <img src='/images/shoe_2-removebg-preview copy.png' className='border-2 rounded-xl'alt='logo'height={200} width={230}/>
                <img src='/images/shoe_3-removebg-preview.png' className='border-2 rounded-xl' height={200} width={230}/>
                <img src='/images/shoe_4-removebg-preview.png' className='border-2 rounded-xl 'height={200} width={230}/>
           </div>
       </div>
            
       
   </section>
            
    </main>
        
    );
};
export default home;