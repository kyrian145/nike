const Navbar=()=>{
    return(
         <main className="bg-white relative" >
             <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                <img src="/images/nike-removebg-preview.png" alt="" className="size-24"/> 
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg text-white">
                    
                    <li className="bg-red-300 px-4 py-2 rounded-lg text-gray-500">home</li>
                    
                    
                    
                    <a className='bg-red-300 px-4 py-2 rounded-lg text-gray-500 cursor-pointer'href=''>About-us</a>
                    <a>
                    <li className="bg-red-300 px-4 py-2 rounded-lg text-gray-500"id='products'>Products</li>
                    </a>
                    <a href="/contact us">
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
         </main>
    );
};
export default Navbar;