// importing banner from public folder
import banner from '../../../public/images/banner.jpg'

const Header = () => {
    console.log(banner)
    return (
        <div className='my-12'>
            {/* navbar starts here */}
            <nav className="flex justify-between items-center">
            <h1 className='text-[32px] font-bold'>Recipe House</h1>
            <ul className="gap-12 items-center text-base font-normal sm:hidden text-gray-500 lg:flex">
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Recipes</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Search</a></li>
            </ul>
            <section className='flex items-center justify-center gap-4'>
                <div className='flex gap-5 rounded-[50px] py-4 px-6 bg-gray-100'>
                    <img src='./icons/search.svg' />
                    <input className='bg-transparent focus:outline-none' placeholder='Search'/>
                </div>
                <img src='./icons/profile.svg' className='cursor-pointer'/>
            </section>

             </nav>
        {/* navbar ends here */}

        {/* banner section starts here */}
        <section className={`mt-12 bg-no-repeat bg-cover h-[600px] rounded-3xl flex justify-center items-center`} style={{background:`url(${banner})`}}>
            <div className='text-white flex flex-col items-center'>
                <h1 className='text-center text-[52px] font-bold w-11/12 max-w-[897px]'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-center w-11/12 max-w-[933px] font-normal text-lg mt-6'> Explore top recipes, order delicious foods, and join our cooking community. Let us make every meal memorable!</p>
                <div className='font-semibold text-xl flex items-center gap-[30px] mt-10'>
                    <button className='text-black px-[30px] py-[20px] bg-green-400 rounded-[50px] border-2 border-green-400 hover:bg-green-500 hover:text-white'>Explore Now</button>
                    <button className='bg-transparent border-2 border-white rounded-[50px] px-[30px] py-[20px] hover:bg-white hover:text-black'>Our Feedback</button>
                </div>
            </div>
        </section>
        {/* banner section ends here */}

        </div>
    );
};

export default Header;