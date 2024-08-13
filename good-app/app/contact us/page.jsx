export default function hey (){
    return
    (
        <section className="flex flex-col bg-white sm:px-16 px-8 sm:py-32 py-16 p-x w-full max-container flex justify-between items-center max-lg:flex-col gap-10"id='contact us'>
                 <h1 className='text-4xl leading-[68px] lg:max-md font-palanquin font-bold '>
                    sign up for
                    <span className='text-red-500'> update

                    </span> % News letter
                 </h1>
                 <div className=' flex lg:max-w-[40%] w-full items-center max-sm:flex-col gap-10 p-2.5 sm:border sm:border-gray-500 border-gray-500 rounded-full'>
                    <input type='text' placeholder='subscribe@nike.com' className='input'/>
                    <div className='flex justify-end items-center max-sw:w-full ml-40'>
                         <button className=' px-2 py-2 rounded-full bg-red-500 text-white ml-10'>sign up</button>
                    </div>
                 </div>
            </section>
    )
}