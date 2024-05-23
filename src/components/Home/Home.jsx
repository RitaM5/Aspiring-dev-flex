import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=' font-poppins'>
            <div className='px-3 relative bg-gray-100 gap-16 py-16 md:gap-20 lg:gap-0 grid grid-cols-1 md:grid max-md:grid lg:flex justify-between items-center '>
                <div className='w-full text-left space-y-7'>
                    <span className=' px-5 py-1 rounded-3xl text-white bg-[#298541]'>Header</span>
                    <h1 className='text-5xl font-semibold'>A small business<br /> is only as good<br /> as its tools.</h1>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <ul className=' space-y-3'>
                        <li>
                            <span class="relative inline-block text-xl">
                                <i class="fas fa-circle text-[#298541]"></i>
                                <i class="fas fa-check text-white absolute inset-0 flex items-center justify-center"></i>
                            </span>
                            <span className='ml-2 text-lg'>Mauris pellentesque conge libero nec</span>
                        </li>
                        <li>
                            <span class="relative inline-block text-xl">
                                <i class="fas fa-circle text-[#298541]"></i>
                                <i class="fas fa-check text-white absolute inset-0 flex items-center justify-center"></i>
                            </span>
                            <span className='ml-2 text-lg'>Suspendisse molis tincidunt</span>
                        </li>
                        <li>
                            <span class="relative inline-block text-xl">
                                <i class="fas fa-circle text-[#298541]"></i>
                                <i class="fas fa-check text-white absolute inset-0 flex items-center justify-center"></i>
                            </span>
                            <span className='ml-2 text-lg'>Praesent various justo vel justo pulvinar</span>
                        </li>
                    </ul>
                </div>
                <div class=" h-[660px] md:h-[600px] w-full md:w-[500px] rounded-md md:mx-auto px-3 flex flex-col items-center justify-center bg-white shadow-2xl">
                    <div className='bg-[#298541] px-3 py-1 rounded-md relative lg:bottom-8 md:bottom-6 max-sm:bottom-10 max-md:bottom-12'>
                        <i class="fas fa-bars text-white text-4xl"></i>
                    </div>
                    <h1 className='md:text-2xl text-xl font-semibold mt-4'>Join Our Community</h1>
                    <p className='text-lg'>Start your free trial</p>
                    <div class="lg:py-3 lg:mt-6 py-5 px-10 space-y-4 ">
                        <div class='space-y-1'>
                            <label class="text-[#26203B] text-lg font-medium flex">Email</label>
                            <input type="email" placeholder="Enter your email address"
                                class="input px-2 h-11 input-bordered border border-gray-400 rounded-md w-full " />
                        </div>
                        <div class="pt-3">
                            <input type="button" value="Sign In"
                                class="input cursor-pointer bg-[#298541] text-white text-lg font-semibold h-11 rounded-md input-bordered w-full" />
                        </div>
                        <div class="flex justify-center items-center gap-3 md:w-[370px]">
                            <hr class="w-16 border-gray-400"></hr>
                            <span>or</span>
                            <hr class="w-16 border-gray-400"></hr>
                        </div>
                        <div class="gap-2 grid py-1">
                            <div class="flex items-center justify-center gap-2 px-3 cursor-pointer py-1 w-full rounded-md border border-gray-400 text-center">
                                <i class="fab fa-google text-2xl"></i><span>Sign in with google</span>
                            </div>
                            <div class="flex items-center justify-center px-3 gap-2 cursor-pointer py-1 w-full rounded-md border border-gray-400 text-center">
                                <i class="fab fa-apple text-3xl"></i><span>Sign in with apple</span>
                            </div>
                            <div class="flex items-center justify-center px-3 gap-2 cursor-pointer py-1 w-full rounded-md border border-gray-400 text-center">
                                <i class="fab fa-facebook text-2xl"></i><span>Sign in with facebook</span>
                            </div>
                        </div>
                        <div class="text-center py-4 md:w-[370px] w-full">
                            <p class="text-[#9C9AA5] text-[15px]">
                                Already have an account?
                                <Link to='' className='text-[#298541] ml-2 text-lg font-semibold'>Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45" className="absolute bottom-0  w-[100%] left-0 wave-svg">
                    <path fill='#fff' d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.42,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path>
                </svg>
            </div>
            {/* 2nd section */}
            <div className='py-12 space-y-3 px-3'>
                <div class=" bg-lime-100 w-28 rounded-3xl mx-auto">
                    <span className=' px-5 py-1 rounded-3xl  text-[#298541]'>NUMBERS</span>
                </div>
                <h1 className='text-3xl font-semibold pt-3'>We believe in the power of the data</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto in blanditiis ratione, corrupti, esse sint expedita, a modi assumenda cumque sit odit quod natus nemo voluptatibus illum similique? Eveniet, expedita?</p>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-3  md:gap-3 py-7'>
                    <div className='text-center space-y-2'>
                        <h1 className=' font-semibold text-3xl'>235.000</h1>
                        <p className='text-lg'>Projects completed</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className=' font-semibold text-3xl'>$10m</h1>
                        <p className='text-lg'>APR</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className=' font-semibold text-3xl'>+50.000</h1>
                        <p className='text-lg'>Hours saved annualy</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className=' font-semibold text-3xl'>3.500</h1>
                        <p className='text-lg'>Unique users</p>
                    </div>
                </div>
            </div>
            {/* 3rd section */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f6" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,170.7C672,149,768,107,864,112C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className='py-12 space-y-3 bg-[#f3f4f6] px-3'>
                <div class=" bg-lime-100 w-28 rounded-3xl mx-auto">
                    <span className=' px-5 py-1 rounded-3xl  text-[#298541]'>FEATURES</span>
                </div>
                <h1 className='text-3xl font-semibold pt-3'>Gain more insight into how people use your</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto in blanditiis ratione, corrupti, esse sint expedita, a modi assumenda cumque sit odit quod natus nemo voluptatibus illum similique? Eveniet, expedita?</p>
                <img className='mx-auto rounded-md py-6' src="https://media.istockphoto.com/id/1450272068/photo/wind-sun-and-water-energy.jpg?s=612x612&w=0&k=20&c=ZisUNSqxdrnH-L7-CuUBBAVCdkE3CY8GEAPsVMgWy6M=" alt="" srcset="" />
            </div>
        </div>
    );
};

export default Home;