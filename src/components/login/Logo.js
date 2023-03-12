import logoDark from '../../assets/icons/logoDark.svg';

const Logo = () => {
    return (
        <section className="flex flex-col w-[357px]">
            <div className='border-b-4 pb-4'>
                <img src={logoDark} alt='logo' className='h-[127px] w-[327px]' />
            </div>
            <div className='font-maven font-medium leading-[18px] p-2 text-center '>
                Check if you already have a Account with us, Just incase you had forgotten. Login
            </div>
        </section>);
}

export default Logo;