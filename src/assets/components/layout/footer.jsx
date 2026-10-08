import facebookImg from '../images/footer-facebook.png';
import twitterImg from '../images/footer-twitter.png';
import youtubeImg from '../images/footer-youtube.png';
import pinterestImg from '../images/footer-pinterest.png';
import periscopeImg from '../images/footer-periscope.png';

export default function Footer() {
    return (
        <footer className="bg-neutral-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button className="border-2 border-blue-600 hover:bg-blue-600 text-white px-5 py-2.5 font-bold hover:cursor-pointer transition-colors uppercase">
                    SIGN UP NOW!
                </button>

                <div className="flex items-center gap-4">
                    <span className="font-bold text-blue-500 uppercase tracking-wider text-sm">FOLLOW US</span>
                    <div className="flex gap-3 items-center">
                        <a href="#"><img src={facebookImg} alt="Facebook" className="w-7 h-7 hover:opacity-80 transition-opacity" /></a>
                        <a href="#"><img src={twitterImg} alt="Twitter" className="w-7 h-7 hover:opacity-80 transition-opacity" /></a>
                        <a href="#"><img src={youtubeImg} alt="YouTube" className="w-7 h-7 hover:opacity-80 transition-opacity" /></a>
                        <a href="#"><img src={pinterestImg} alt="Pinterest" className="w-7 h-7 hover:opacity-80 transition-opacity" /></a>
                        <a href="#"><img src={periscopeImg} alt="Periscope" className="w-7 h-7 hover:opacity-80 transition-opacity" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


