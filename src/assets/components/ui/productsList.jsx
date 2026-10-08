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

            {/* griglia img */}
            <div className="container my-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {comics.map(product => (
                        <div key={product.id} className="flex flex-col">
                            {/* contenitore immagine della stessa dimensione */}
                            <div className="w-full aspect-square overflow-hidden bg-neutral-800 mb-2">
                                <img
                                    src={product.thumb}
                                    alt={product.title}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* titolo uniforme */}
                            <h3 className="text-xs sm:text-sm font-semibold uppercase text-white line-clamp-2 m-0 min-h-[2.5rem]">
                                {product.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/** bottone di fine lista */}
                <div className="text-center mt-8">
                    <button className="rounded bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 hover:cursor-pointer font-bold">LOAD MORE</button>
                </div>
            </div>
        </div>
    );
}

