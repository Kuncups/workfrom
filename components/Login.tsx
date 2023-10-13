import Link from 'next/link';

const Login = () => {
    return (
        <div className="flex justify-center items-center h-[90dvh] bg-[#154B8B] bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/background.png)' }}>
            <div className="bg-[#154B8B] p-6 -mt-10 rounded-lg shadow-md w-96">
                <h2 className="text-4xl font-bold mb-16 text-center mt-8">LOGIN</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        id="enterID"
                        placeholder='Enter ID'
                        name="enterID"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">

                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        name="password"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-center mt-14 mb-24">
                    <button
                        className="w-auto bg-[#26E87F] text-white px-5 py-2 font-semibold rounded hover:bg-green-600 focus:outline-none"
                    >
                        Login
                    </button>
                </div>
                <p className="mt-4 text-center font-semibold text-sm text-white mb-16">
                    You dont have an account yet? Click
                    <Link href="/register">
                        <span className="text-green-500 hover:underline"> Registration</span>
                    </Link>
                </p>
            </div>
            <div className="text-right text-[#154B8B] font-bold p-4 w-1/2 ml-20 -mt-20"> {/* Tulisan besar di sebelah kanan */}
                <p className="text-5xl justify-center text-center">
                    Please log in to be able
                </p>
                <p className="text-5xl justify-center text-center">
                    to choose the
                </p>
                <p className="text-5xl justify-center text-center">
                    company you want
                </p>
            </div>
        </div>
    );
};

export default Login;
