import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#F5F5DC] text-base-content mt-5">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <img className="w-[80px] h-[80px] rounded-full" src="https://i.ibb.co/4Ygm27Q/Borcelle.png" alt="" />
                    <p>Tastebud Tavern. <br />Providing reliable Food since 2022</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <Link to='https://www.facebook.com/fahimmontasir.siam'>
                         <FaFacebook></FaFacebook>
                        </Link>
                        <Link to='https://www.linkedin.com/in/turzacse/'>
                         <FaLinkedin></FaLinkedin>
                        </Link>
                        <Link to='https://github.com/turzacse'>
                         <FaGithub></FaGithub>
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;