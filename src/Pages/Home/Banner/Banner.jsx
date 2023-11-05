import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const Banner = () => {
    //https://i.ibb.co/N2QgVMy/6-2.jpg
    //https://i.ibb.co/5vZW9V8/5-1.jpg
    //https://i.ibb.co/4Ygm27Q/Borcelle.png
    //https://i.ibb.co/FsspmDH/1-3.png
    //https://i.ibb.co/KbFM0Hn/3-3.jpg
    //https://i.ibb.co/nQwM6qX/3-1.jpg

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PtkvKd3/offer-image-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Where Every Bite is a Masterpiece</h1>
                        <p className="mb-5"> Immerse yourself in a world of culinary artistry, where each dish is meticulously crafted to deliver an unforgettable dining experience. From the first bite to the last, savor the flavors, textures, and creativity that make every moment at our restaurant truly exceptional.</p>
                        <button className="btn bg-[#FF3811] border-none text-white">Explore More <BsFillArrowUpRightCircleFill className='text-2xl'></BsFillArrowUpRightCircleFill></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;