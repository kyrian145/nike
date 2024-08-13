"use client"
import {statistics} from'@/component/statistics'
import {shoes} from "@/component/shoes"
import bigshoe from "@/public/images/bigshoe.png"
import { useState } from 'react';
import services from'@/component/services'
import ServiceCard from '@/component/servicecard'
import Link from 'next/link';
import{footerlinks} from'@/component/footerlinks'
import Superquality from'@/component/superquality'
import Navbar from '../../component/Navbar';


export default function hey(){
    
    return(
        <main className="bg-white w-screen h-screen relative">
           <Navbar/>
            
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
            <section className="bg-white  sm:px-16 px-8 sm:py-24 py-12 max-container max-sm:mt-12">
                 <div className='flex flex-col justify-start gap-5'>
                    <h1 className='text-4xl font-palanquin font-bold '>our <span className='text-red-500'> popular</span> products

                        
                    </h1>
                    <p className='lg:max-w-lg mt-2 font montserrat text text-gray-500 '>Experience top-nothch quality and style with our sought-after selections.Discover a word of comfort,design,and value.</p>
                 </div>
                 <div className='flex justify-between w-full max-sm:w-full mt-32'>
                    <div className='border-2 rounded-xl w-80 h-48 bg-purple-100 '>
                         <img src='/images/shoe5-removebg-preview.png'height={280} width={230} className='mb-10'/>
                         
                    </div>
                    
                    <div className='border-2 rounded-xl w-80 h-48 bg-purple-100'>
                         <img src='/images/shoe9-removebg-preview.png'height={280} width={230} className='mt-10'/>
                         
                    </div>
                    <div className='border-2 rounded-xl w-80 h-48 bg-purple-100'>
                         <img src='/images/shoe6-removebg-preview.png'height={280} width={230} className=''/>
                         
                    </div>
                    <div className='bg-purple-100 border-2 h-48 rounded-xl w-80'>
                         <img src='/images/shoe7-removebg-preview.png'height={280} width={230} className='mt-10'/>
                         
                         
                    </div>
                 </div>
                 <div className='flex justify-between w-full max-sm:w-full mt-6  '>
                 <div className='flex '>
                    <img src='/images/star-removebg-preview.png' className='size-5 '/>
                         <h1 className='font-montserrat text-xl leading-normal text-gray-400 '>(4.5)
                          
                         </h1>
                         <h2 className='flex flex-col mt-6 text-2xl leading-normal font-semibold font-palanquin mr-10'>Nike Air Jordan-100
                         
                         <p className='mt-2 font-semibold font-montserrat text-red-500 text-lg leading-normal'> $230.10 </p>
                        
                         </h2>
                         
                    </div>
                    <div className='flex'>
                    <img src='/images/star-removebg-preview.png' className='size-5'/>
                         <h1 className='font-montserrat text-xl leading-normal text-gray-400'>(4.5)</h1>
                         <h2 className=' justify-start mt-6 text-2xl leading-normal font-semibold font-palanquin mr-10 items-start text-start'>Nike Air Jordan-105
                         
                         <p className='mt-2 font-semibold font-montserrat text-red-500 text-lg   leading-normal'>$235.60 </p>
                         
                         </h2>
                    </div>
                    <div className='flex'>
                    <img src='/images/star-removebg-preview.png' className='size-5'/>
                         <h1 className='font-montserrat text-xl leading-normal text-gray-400'>(4.5)</h1>
                         <h2 className='flex flex-col mt-6 text-2xl leading-normal font-semibold font-palanquin mr-10'>Nike Air Jordan-200
                         
                         <p className='mt-2 font-semibold font-montserrat text-red-500 text-lg leading-normal'> $232.20 </p>
                        
                         </h2>
                    </div>
                    <div className='flex'>
                    <img src='/images/star-removebg-preview.png' className='size-5'/>
                         <h1 className='font-montserrat text-xl leading-normal text-gray-400'>(4.5)</h1>
                         <h2 className='flex flex-col mt-6 text-2xl leading-normal font-semibold font-palanquin mr-10'>Nike Air Jordan-108
                         
                         <p className='mt-2 font-semibold font-montserrat text-red-500 text-lg leading-normal'>$210.10 </p>
                         
                         </h2>
                    </div>
                 </div>
                
                 

            </section>
            <section className="bg-white sm:px-16 px-8 sm:py-24 py-12 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
              <Superquality/> 
                    
                 
            </section>
            
  <section className="bg-white max-container flex justify-between flex-wrap gap-9 sm:px-16 px-8 sm:py-24 py-12 px-10 flex justify-between "id='products'>
   
     <div className='border-2 h-64 rounded-xl w-80 shadow-3xl '>
          <div className='flex items-center bg-red-500 h-10 w-10 rounded-full mt-8 ml-24'>
          <img src='/images/motto-removebg-preview.png' className='size-10 bg-red'/>
          </div>
          <h1 className='mt-5 ml-10 font-palanquin text-3xl leading-normal font-bold'>
            free shipping
          </h1>
          <p className='mt-3 break-words font-montserrat text-lg leading-normal text-gray-500'>
          Enjoy seamless shopping with our complimentary shipping service 
          </p>
     
   </div>
   <div className='bg-white border-2 h-64 rounded-xl w-80 shadow-3xl '>
     <div className=' flex justify-center bg-red-500 h-10 w-10 rounded-full mt-8 ml-24'>
     <img src='/images/all_success-removebg-preview (1).png' className=' size-10 '/>
     </div>
          
          <h1 className='mt-5 ml-10 font-palanquin text-3xl leading-normal font-bold'>
            secure payment
          </h1>
          <p className='mt-3 break-words font-montserrat text-lg leading-normal text-gray-500'>
          Experience worry-free transactions with our secure payment options. 
          </p>
     
   </div>
   <div className='bg-white border-2 h-64 rounded-xl w-80 shadow-3xl '>
         <div className='flex justify-center items-center bg-red-500 h-10 w-10 rounded-full mt-8 ml-24 '>
         <img src='/images/hando-removebg-preview.png' className='size-10 bg-red'/>
         </div>
          <h1 className='mt-5 ml-10 font-palanquin text-3xl leading-normal font-bold'>
            love to help you
          </h1>
          <p className='mt-3 break-words font-montserrat text-lg leading-normal text-gray-500'>
          our dedicated team is here to assist you every step of the way. 
          </p>
     
   

     </div>
</section>
            <section className="sm:px-16 px-8 sm:py-24 py-12 flex justify-wrap justify-around items-center max-xl:flex-col-reserve gap-10 max-container bg-white ">
                 <div className='relative gap-6'>
                 <div className='flex gap-4'>
                    <img src='/images/confirmnike-removebg-preview.png'className='size-40 bg-purple-50 border-2 rounded-xl h-48 w-48'/>
                    <img src='/images/tesnike-removebg-preview.png' className='size-40 bg-purple-50 border-2 rounded-xl h-48 w-48'/>
                 </div >
                 <div className='flex mt-5 '>
                    <img src='/images/landshoe-removebg-preview.png'className='size-40 bg-purple-50 border-2 rounded-xl h-48 w-96 '/>
                    <img src='/images/logologo-removebg-preview.png' className='size-40 mr-10  '/>
                 </div>
                 </div>
              <div>
              <h1 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
                         
                         <span className='text-red-500'> special

                         </span>
                         <span className='text-red-500'> 

                         </span>  offer
                        
                    </h1>
                    <p className='font-montserrat text-gray-500 text-lg leading-7 mt-4 lg:max-w-lg'>
                      Embarking on a shopping journey that redefines your experience with unbeatable deals from premier selections to incredible savings,we offer unparalled value that set us apart. 
                    </p>
                    <p className='mt-6 lg:max-w-lg font-montserrat text-gray-500 text-lg leading-7 '>
                          Navigate a realm of possibilities designed to fufil your unique desires,suprassing the loftiest expectations.your journey with us is nothing short of exceptional.
                    </p>
                    <div className='flex gap-6'>
                    <button className=" flex justify-center items-center gap-2 bg-red-400 px-4 py-4 rounded-full border font-montserrat text-lg leading-none text-white mt-6 border-red-600">
                         view details 
                         
                    </button>
                    <button className=" flex justify-center items-center gap-2 bg-white border-red-500  px-4 py-4 rounded-full border font-montserrat text-lg leading-none text-red-500 mt-6 border-red-600">
                         learn more </button>
                    </div>
              </div>
            </section>
            <section className="bg-blue-50 sm:px-16 px-8 sm:py-24 py-12 max-container">
               <h1 className='font-palanquin font-bold text-4xl text-center'> what our
              <span className='text-red-500'> customers </span>
              say?
               </h1>
               <p className='info-text  m-auto mt-4 max-w-lg text-center text-gray-500'>hear genuiene stories from our satisfied  customers about their exceptional experience with us. </p>
                 <div className='flex justif-around mt-24 flex  justify-evenly items-center max-lg:flex -col gap-14'>
                 <div className='mt-24 flex  justify-evenly items-center max-lg:flex -col gap-14'>
                    <div className='justify-center'>
                     <img src='/images/elon mu.jpeg'className='size-16 h-24 w-24 rounded-full ml-40 flex justify-center items-center'/>
                     <h1 className='mt-4 text-gray-500 text-1xl max-w-sm text-center'>The attention to detail and the quality of product exceded my expectations Highly commendable and perfect! </h1>
      <div className='flex mt-2 gap-1 ml-40'>
                       <img src='/images/star-removebg-preview.png' className='size-16 h-8 w-8 items-center  '/>
                       <p className='text-gray-500 text-1xl text-center mt-1 '>(4.5)</p>
                     </div>
                     <p className='font-montserat text-3xl font-bold mt-2 text-center'>Elon musk</p>
                    </div>
                 </div>
                 <div className='mt-24 flex  justify-evenly items-center max-lg:flex -col gap-14 justify-around'>
                    <div>
                     <img src='/images/yesitalian.jpg'className='size- h-24 w-24 rounded-full ml-40'/>
                     
                     <h1 className='mt-4 text-gray-500 text-1xl max-w-sm text-center'>The product not only me but exceded my expectations.i will definitely be a returning customer. </h1>
                     
                     <div className='flex mt-2 ml-40 gap-2'>
                       <img src='/images/star-removebg-preview.png' className='size-16 h-8 w-8'/>
                       <p className='text-gray-500 text-1xl max-w-sm text-center mt-1' >(4.5)</p>
                     </div>
                     <p className='font-montserat text-3xl font-bold mt-2  text-center'>ceaser stella</p>
                    </div>
                 </div>
                 <div className='justify-center mt-24'>
                     <img src='/images/woman.jpeg'className='size-16 h-24 w-24 rounded-full ml-40 flex justify-center items-center'/>
                     <h1 className='mt-4 text-gray-500 text-1xl max-w-sm text-center'>The product was great and has long lasting capability and durability.graet product and efficient!  </h1>
                     
                     <div className='flex mt-2 gap-1 ml-40'>
                       <img src='/images/star-removebg-preview.png' className='size-16 h-8 w-8 items-center  '/>
                       <p className='text-gray-500 text-1xl text-center mt-1 '>(4.5)</p>
                     </div>
                     <p className='font-montserat text-3xl font-bold mt-2 text-center'>Richard Sylvia</p>
                    </div>
                 
                 </div>
            </section>
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
            <footer className="bg-black p-x p-8 pb-8 max-container">
               <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
                  <div className='flex flex-col items-start'>
                    <a href='/'> 
                        <img src='/images/black-removebg-preview.png'className='size-24'/>
                    </a>
                    <p className='mt-6 text-base text-white leading-7 font-montserrat sm:max-w-sm '>Get shoes ready for the new term  at your nearest nike store.find your perfect size in store.Get rewards.

                    </p>
                    <div className='flex items-center gap-5 mt-8'>
                       <Link href="https://www.facebook.com/bugaty.ugwu.3">
                       <img src='/images/facebook-removebg-preview.png'className=' bg-white size-16 h-10 w-10 rounded-full'/>
                       </Link>
                       <Link href="https://x.com/ugwunelson56?s=09">
                       <img src='/images/twitter-removebg-preview.png' className=' bg-white size-16 h-10 w-10 rounded-full'/>
                       </Link>
                       <Link href="https://www.instagram.com/bugatyugwu?igsh=MTlqMHl2NXJpcHpjNA==">
                       <img src='/images/instagram-removebg-preview.png'className=' bg-white size-16 h-10 w-10 rounded-full'/>
                       </Link>
                    </div>
                        
                  </div>
                  <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                     {footerlinks.map((section)=>(
                         <div key={section}>
                              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                              <ul className='text-white'>{section.links.map((link)=>(
                                   <li className='mt-3 text-white font-montserrat text-base leading-normal hover:text-gray-500 cursor-pointer'key={link.name}>
                                        <Link href={link.name}>{link.name}</Link>
                                   </li>
                              ))}</ul>

                         </div>
                     ))}
                  </div>
               </div>
               <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center '>
                       <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer  '>
                           <img src='/images/copyright-removebg-preview.png'className='size-16 h-8 w-8 rounded-full bg-white'/>
                           <p className='text-white font-montserrat cursor-pointer'>copyright. All rights reserved.</p>
                       </div>
                       <p className='text-white font-montserrat cursor-pointer'>Terms & condtions</p>
               </div>
                 
            </footer>
        </main>
    )
}