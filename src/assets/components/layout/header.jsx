import Logo from '../ui/logo';

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
                <Logo />
                <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 font-bold text-xs md:text-sm uppercase text-gray-700">
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">CHARACTERS</a>
                    <a href="#" className="text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-blue-600 transition-all">COMICS</a>
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">MOVIES</a>
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">TV</a>
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">GAMES</a>
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">COLLECTIBLES</a>
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">VIDEOS</a>
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">FANS</a>
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">NEWS</a>
                    <a href="#" className="hover:text-blue-600 no-underline py-2 md:py-4 border-b-2 md:border-b-4 border-transparent hover:border-blue-600 transition-all">SHOP</a>
                </nav>
            </div>
        </header>
    );
}

