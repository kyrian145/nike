const superquality =()=>{
    return (
        <section className="bg-white sm:px-16 px-8 sm:py-24 py-12 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        id='About-us'>
            
               <div className='flex flex-1 flex-col '>
                    <h1 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
                         we provide your 
                         <span className='text-red-500'> super

                         </span>
                         <span className='text-red-500'> Quality

                         </span> shoes
                    </h1>
                    <p className='font-montserrat text-gray-500 text-lg leading-7 mt-4 lg:max-w-lg'>
                      Ensuring premium comfort and style,our meticulously crafted footwear is designed to elevate your experience,providing you with unmatched quality,innovation, and a touch of elegance. 
                    </p>
                    <p className='mt-6 lg:max-w-lg font-montserrat text-gray-500 text-lg leading-7 '>
                          our dedication to detail and excellence ensures your satisfaction.
                    </p>
                    <div>
                    <button className=" flex justify-center items-center gap-2 bg-red-400 px-4 py-4 rounded-lg border font-montserrat text-lg leading-none text-white mt-6 border-red-600">
                         view details 
                        
                    </button>
                    </div>
               </div>
               <div className='flex justify-betwee gap-20  '>
                    <img src='/images/great_shoe-removebg-preview.png' className='border-2 rounded-lg bg-green-50'alt='logo'height={300} width={300}/>
                    <img src='/images/ge-removebg-preview.png' className='border-2 rounded-lg bg-green-50'alt='logo'height={300} width={300}/>
                    
               </div>
                 
            </section>
    );
};
export default superquality;