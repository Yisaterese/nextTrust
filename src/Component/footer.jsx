const Footer = ()=>{
    return(
        <div className="flex md:flex-row flex-col items-center justify-between bg-custom text-white md:px-25 md:py-8 py-2">
            <p className='font-bold font-sans-serif text-[20]'>NEXTRUST</p>
            <div  className="flex gap-3 font-sans-serif text-[16px] ">
                <p>Explore</p>
                <p>Support</p>
                <p>Privacy</p>
                <p>Terms of Service</p>
            </div>
            <div className="flex gap-3 font-sans-serif text-[16px] ">© 2025 NEXTRUST</div>
        </div>
    )
}

export default Footer;