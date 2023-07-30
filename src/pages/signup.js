import RootLayout from '<test>/components/RootLayout/RootLayout';
import React from 'react'
import { signIn } from "next-auth/react";

export default function SignUp() {

    // const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    // const onEmailChange = (e) => {
    //     setUserInfo(state => ({ ...state, email: e.target.value }));
    // }

    // const onPasswordChange = (e) => {
    //     setUserInfo(state => ({ ...state, password: e.target.value }));
    // }

    const onGoogleLogIn = () => {
        signIn("google", { callbackUrl: "http://localhost:3000/" })
    }

    const onGitHubLogIn = () => {
        signIn("github", { callbackUrl: "http://localhost:3000/" })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Please sign up to our application to access all the features available.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <div className="card-body">
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={onEmailChange} type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={onPasswordChange} type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <hr className='h-[2.5px] w-full bg-slate-500' /> */}
                        <div className="form-control mt-2">
                            <button onClick={onGoogleLogIn} className="btn btn-info">Google</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={onGitHubLogIn} className="btn btn-neutral">GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SignUp.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};