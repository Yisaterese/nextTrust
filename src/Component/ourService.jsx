const OurService = ()=>{
    const data = [
        {
            id:1,
            topic:"Automated Payment",
            description:"Enjoy hassle-free pension contributions with scheduled, automatic payments.",
        } ,
        {
            id:2,
            topic:"Seamless & Fast Transactions",
            description:"Make quick, secure pension transactions with minimal delays",
        },
        {
            id:3,
            topic:"Transparency",
            description:" Get clear, real-time insights into your contributions and returns.",
        },
        {
            id:4,
            topic:"Low-Risk Investment Suggestions ",
            description:" Secure your future with expert-backed, stable investment options.",
        },
        {
            id:5,
            topic:"Contribution",
            description:"Flexible plans to grow your pension savings at your own pace.",
        }
    ]
    return(
        <div className=" flex flex-col items-center justify-center w-[100%] px-2 md:px-25 md:mb-10 ">
            <p className="text-gray-900 text-[35px] font-serif font-bold md:mb-10 mb-5">Our Service</p>
            <div className="flex w-full md:flex-wrap flex-col md:flex-row justify-between gap-3">
                {data.map((value,index)=> (
                    <div key={index} className="flex w-[80%] md:w-[45%] gap-3 group self-center md:self-start">
                        <div className="w-[3px] h-[130px] bg-custom group-hover:bg-custom transition-all duration-300"/>
                        <div className="flex flex-col items-center justify-center w-[80%]">
                            <p className="text-gray-700 group-hover:text-gray-900 font-sans font-bold text-[22px] transition-all duration-300 self-start">
                                {value.topic}
                            </p>
                            <p className="text-gray-700 group-hover:text-gray-900 text-[20px] font-serif transition-all duration-300 text-start">
                                {value.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default OurService;