import Link from 'next/link';

const Topbar = () => {
    return (
        <header className="bg-[#D9D9D9] p-4">
            <div className="container mx-auto flex justify-between items-center mt-2 mb-2">
                {/* Logo di sebelah kiri */}
                <div>
                    <Link href="/">
                        <img src='/logo.png' className="text-white w-22 h-5 object-contain font-bold ml-8" />
                    </Link>
                </div>

                {/* Tautan menu di sebelah kanan */}
                <nav>
                    <ul className="flex space-x-4 mr-8">
                        <li>
                            <Link href="/">
                                <span className="text-[#154B8B]">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className="text-[#154B8B]">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service">
                                <span className="text-[#154B8B]">Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className="text-[#154B8B]">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Topbar;
