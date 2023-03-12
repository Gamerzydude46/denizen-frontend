import Logo from '../components/login/Logo';
import SignUp from '../components/login/SignUp';

function Access(){
    return(
        <>
            <div className="flex flex-row w-screen h-screen justify-between">
                <div className="bg-Base w-1/2 flex justify-center items-center">
                    <Logo/>
                </div>
                <div className="bg-White w-[1238px] h-screen rounded-l-full flex justify-center items-center">
                    <SignUp/>
                </div>
            </div>
        </>
    );
}

export default Access;