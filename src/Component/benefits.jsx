const Benefits = ()=>{
   const data = [
        {
            id:1,
            topic:"Direct Control & Ownership",
            description:"Pensioners have full autonomy over their retirement savings, with no intermediaries dictating fund access.\n" +
                "Every transaction is transparent, secure, and accessible at any time, ensuring complete peace of mind",
        } ,
        {
            id:2,
            topic:"Seamless Fund Access",
            description:"Say goodbye to delays and paperwork—pensioners can access their funds instantly without relying on third-party administrators.\n" +
                "Automated withdrawals ensure smooth and efficient transactions, eliminating unnecessary processing times",
        },
        {
            id:3,
            topic:"Financial Inclusion",
            description:"Designed for everyone, from formal employees to self-employed individuals and SMEs.\n" +
                "Flexible contribution plans allow workers to save at their own pace, making retirement security more accessible than ever.",
        },
        {
            id:4,
            topic:"Low Fees & Cost Efficiency",
            description:"Traditional pension systems often come with hidden charges and high administrative fees—NexTrust eliminates these, ensuring more savings for pensioners.\n" +
                "Lower transaction costs maximize fund accumulation over time, helping pensioners grow their wealth",
        },
       {
            id:5,
            topic:"Cross-Border Accessibility",
            description:"No geographical restrictions—pensioners can access their funds from anywhere in the world.\n" +
                "Perfect for expatriates and international workers, ensuring retirement savings remain secure and accessible, no matter where life takes them.",
        }
    ]
    return (
        <div className=" flex flex-col items-center justify-center w-[100%] px-2 md:px-25 mb-10 mt-15">
            <p className="text-gray-900 text-[35px] font-serif font-bold md:mb-10 mb-5">Benefits</p>
            <div className="flex w-full md:flex-wrap flex-col md:flex-row justify-between gap-7">
                {data.map((value, index) => (
                    <div key={index} className="flex w-[95%] md:w-[45%] gap-3 group items-start self-center md:self-start">
                        <div className="w-[3px] md:h-[190px] h-[280px] bg-custom group-hover:bg-custom transition-all duration-300"/>
                        <div className="flex flex-col items-center justify-center w-[95%]">
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

export default Benefits;