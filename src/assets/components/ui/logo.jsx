import logo from '../images/dc-logo.png';

export default function Logo() {
    return (
        <img src={logo} alt="LOGO" width={100}
            className="inline-block mb-4 mt-6" />
    )
}