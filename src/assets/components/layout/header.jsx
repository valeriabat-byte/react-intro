import Logo from '../ui/logo'

export default function Header() {

    return (
        <div className="container text-center">
            <Logo />
            <nav className="m-4 uppercase flex gap-4 justify-between">
                <a href="#" className="no-underline">CHARACTERS</a>
                <a href="#">COMICS</a>
                <a href="#">MOVIES</a>
                <a href="#">tv</a>
                <a href="#">GANES</a>
                <a href="#">COLLECTIBLES</a>
                <a href="#">VIDEOS</a>
                <a href="#">FANS</a>
                <a href="#">NEWS</a>
                <a href="#">SHOP</a>
            </nav>
        </div>
    )
}
