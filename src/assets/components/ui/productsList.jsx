import jumbotronImg from '../images/jumbotron.jpg';
import { comics } from './comics.js';

export default function ProductsList() {
    return (
        <div className="bg-neutral-900 text-white pb-8">
            {/** cover */}
            <div className="w-full h-80 overflow-hidden">
                <img
                    src={jumbotronImg}
                    alt="DC-Comics"
                    className="w-full h-full object-cover object-top"
                />
            </div>

            {/* griglia img in 2 righe centrate */}
            <div className="max-w-6xl mx-auto px-4 my-8 flex flex-col items-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full justify-items-center">
                    {comics.map(product => (
                        <div key={product.id} className="flex flex-col w-full group">
                            {/* contenitore immagine della stessa dimensione */}
                            <div className="w-full aspect-square overflow-hidden bg-neutral-800 mb-2 rounded shadow-md">
                                <img
                                    src={product.thumb}
                                    alt={product.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                                />
                            </div>
                            {/* titolo uniforme */}
                            <h3 className="text-xs text-white font-semibold uppercase line-clamp-2">
                                {product.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/** bottone di fine lista */}
                <div className="text-center items-center mt-10">
                    <button className="rounded bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-bold uppercase hover:cursor-pointer">
                        LOAD MORE
                    </button>
                </div>
            </div>
        </div>
    );
}


