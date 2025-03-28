import image from '../assets/img/person.avif';

const AboutUs = ()=>{
    return(
        <div className="w-[100%] flex items-center py-6 flex-col self-center rounded-xl border-1 border-white px-2 md:px-25 mt-15">
            <p className="text-[35px] font-bold font-serif self-center text-gray-900">About Us</p>
            <div
                className="flex justify-between md:flex-row flex-col px-12 w-[98%] py-2 md:h-[180px] h-[280px] items-center nav-gradient rounded-xl">
                <p className="text-color font-sans font-semibold md:text-[35px] text-[28px] text-center">Meet The&nbsp;
                    <span className="text-color font-extrabold md:text-[40px] text-[35px]">
                         NexTrust
                    </span>
                </p>
                <img className="object-cover rounded-2xl w-[300px] h-[95%] "
                     src={"https://www.palpensions.com/wp-content/uploads/2022/12/DALL_E_2022-11-11_12.29-1-1.png"}
                     alt="Picture"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:my-25 my-10">
                <p className=" text-center text-[20px] font-serif text-black">
                    NexTrust is a decentralized pension management platform that leverages blockchain technology to
                    provide a secure,
                    transparent, and efficient way for users—whether employees,
                    pension fund administrators (PFAs), or retirees—to manage and grow their retirement savings.
                </p>
                <p className=" text-center text-[20px] font-serif text-black">
                    Unlike traditional pension systems, NexTrust eliminates intermediaries
                    by directly connecting users with their pension funds,
                    ensuring greater transparency and control over their contributions and disbursements.
                </p>
            </div>
            <div className="flex gap-5 items-center justify-evenly md:mb-20 mb-10">
                <div className="flex items-start justify-center flex-col gap-15">
                    <div className="group md:w-[60%] w-[98%] flex items-start gap-4">
                        <div
                            className="w-[8px] h-[180px] bg-custom group-hover:bg-blue-700 transition-all duration-300"/>

                        <div>
                            <p className="text-gray-700 group-hover:text-gray-900 font-sans font-bold text-[25px] transition-all duration-300">
                                Our Vision
                            </p>
                            <p className="text-gray-700 group-hover:text-gray-900 text-center text-[20px] font-serif transition-all duration-300">
                                To create a decentralized, transparent, and automated pension system—accessible to all,
                                independent of intermediaries.
                            </p>
                        </div>
                    </div>

                    <div className="group md:w-[60%] w-[98%] flex items-start gap-4">
                        <div
                            className="w-[8px] h-[180px] bg-custom group-hover:bg-blue-700 transition-all duration-300"/>
                        <div>
                            <p className="text-gray-700 group-hover:text-gray-900 font-sans font-bold text-[25px] transition-all duration-300">
                                Our Mission
                            </p>
                            <p className="text-gray-700 group-hover:text-gray-900 text-center text-[20px] font-serif transition-all duration-300">
                                We aim to provide users with complete control over their pensions, optimize investment
                                growth, and promote financial security for individuals across the globe.
                            </p>
                        </div>
                    </div>

                </div>
                <img src={image} alt="Image" className="hidden sm:block h-[450px] object-cover rounded-2xl"/>
            </div>
            <div className="w-full bg-custom py-6 rounded">
                <div className="flex items-center justify-between px-2 rounded flex-col md:flex-row gap-2">
                    <div className="flex flex-col items-center justify-between px-4 gap-1">
                        <p className="text-color font-semibold font-serif md:text-start text-center self-start md:text-[40px] text-[16px]">
                            Innovative retirement solutions for you.
                        </p>
                        <p className="text-color font-serif md:text-start text-center self-start md:text-[20px] text-[12px]">
                            Helping you prepare for times of uncertainty is at the heart of what we do.
                        </p>
                    </div>
                    <button className="text-button text-white py-3 px-4 rounded font-semibold font-sans bg-white cursor-pointer mr-4">
                        Join nexTrust
                    </button>
                </div>
            </div>
            <div
                className="mt-6 w-[100%] bg-custom p-6 rounded shadow-lg">
                <div>
                    <p className="text-color font-semibold font-serif md:text-[20px] text-[16px]">
                        Don’t miss any update from us
                    </p>
                    <p className="text-color font-serif md:text-[15px] text-[12px]">
                        Subscribe to our newsletter to keep up with our news and insights.
                    </p>
                </div>
                <div className="flex gap-3 mt-4">
                    <input
                        placeholder="Enter Email"
                        type="email"
                        name="email"
                        className="border px-4 py-2 rounded w-full border-white text-white"
                    />
                    <button className="text-button text-white px-4 py-2 rounded">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;