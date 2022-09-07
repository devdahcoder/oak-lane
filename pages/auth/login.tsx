import React, { useState } from 'react';
import { getMainLayout } from '../../components/Layouts/MainLayout';
import ContainerSize from '../../components/Layouts/ContainerSize';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import Link from 'next/link';


type Props = {}

const Login = (props: Props) => {

    const [hidePassword, setHidePassword] = useState<boolean>(true);

    return (
        <div className="flex flex-row items-center justify-center min-h-screen">
            <ContainerSize className={`w-full max-w-md mt-10 flex flex-col space-y-5`}>
                <div className="flex flex-col space-y-7">
                    <div className="flex flex-col items-center justify-center text-center space-y-9">
                        <div>
                            <Logo titleClassName="mt-auto" iconClassName="w-10" />
                        </div>

                        <div className="text-2xl font-semibold">
                            <p>Log into your account</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-col space-y-5">
                                <div>
                                    <Input 
                                        labelText={`Work Email Address`} 
                                        type={`text`} 
                                        className={`py-3.5 px-4 text-base font-medium placeholder:font-extralight`}
                                        containerClassName={` border-gray-400`}
                                        labelClassName={`text-dark-200 font-semibold text-base tracking-wider`}
                                        placeholder={`Anniehel007@gmail.com`}
                                        mainContainerClassName={`flex flex-col space-y-1`}
                                    />
                                </div>
                                <div>
                                    <Input 
                                        labelText={`Password`} 
                                        type={`${hidePassword ? 'password' : 'text'}`} 
                                        className={`py-3.5 px-4 text-base font-medium placeholder:font-extralight`}
                                        containerClassName={` border-gray-400`}
                                        labelClassName={`text-dark-200 font-semibold text-base tracking-wider`}
                                        placeholder={`Enter Your Password`}
                                        mainContainerClassName={`flex flex-col space-y-1`}
                                        rightIcon={!hidePassword ? <VscEyeClosed className='w-5 h-5' /> : <VscEye className='w-5 h-5' />}
                                        isRightIcon={true}
                                        rightIconContainerClassName={`right-2 border`}
                                        rightIconClick={() => {setHidePassword(!hidePassword)}}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-end">
                                <a className="text-blue-300 " href="http://" target="_blank" rel="noopener noreferrer">Forgotten Password?</a>
                            </div>
                        </div>
                        <div>
                            <Button 
                                className={`w-full bg-green-100 text-center flex flex-row items-center justify-center rounded-sm py-4
                                text-white font-medium hover:bg-green-400 transition-all duration-300 ease-linear`} 
                                text={`Log in`} 
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-5">
                    <div>
                        <Link href={`/auth/sign-up`}>
                            <a className="text-blue-300 " href="" >Create an account</a>
                        </Link>
                    </div>
                </div>
            </ContainerSize>
        </div>
    )
}

Login.getLayout = getMainLayout;
export default Login