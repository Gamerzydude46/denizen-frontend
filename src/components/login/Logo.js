import logoDark from '../../assets/icons/logoDark.svg';

const Logo = () => {
    return (
        <section className="flex flex-col w-[450px]">
            <div className='border-b-4 pb-4 px-3'>
                <img src={logoDark} alt='logo' className='h-[197px] w-[387px]' />
            </div>
            <div className='font-maven font-medium leading-[18px] p-2 text-center text-xl'>
                Check if you already have a Account with us, Just incase you had forgotten. Login
            </div>
        </section>);
}

export default Logo;