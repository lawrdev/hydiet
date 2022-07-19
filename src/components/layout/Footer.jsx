import {FaFacebook as Fb, FaTwitter as Tw} from 'react-icons/fa'
import {RiWhatsappFill as Wa} from 'react-icons/ri'
import {AiFillInstagram as Ig} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Brand from '../shared/Brand'

const Footer = () => {
    const dateYear = new Date().getFullYear();

    return (
        <div className="border-t-2 border-gray-100">
            <div className="container 2xl:px-28 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="mx-2">
                        <div className=" flex flex-col sm:flex-row text-center sm:text-start items-center sm:justify-between mt-20">
                            {/* Brand logo */}
                            <div>
                                <Link to="/">
                                    <Brand />
                                </Link>
                            </div>
                            <div className="mt-10 sm:mt-0">
                                <div className="flex flex-col sm:flex-row gap-3 lg:gap-11 text-gray-400 text-xs sm:text-sm">
                                    <Link to="/">
                                        Download App</Link>
                                    <Link to="/">
                                        Terms {'&'} Conditions</Link>
                                    <Link to="/">
                                        Privacy Policy
                                    </Link>
                                </div>
                            </div>
                            {/* Socials */}
                            <div className="flex gap-4 mt-10 sm:mt-0">
                                <a href="/" >
                                    <Tw alt="twitter"/></a>
                                <a href="/" >
                                    <Fb alt="facebook"/></a>
                                <a href="/" >
                                   <Wa alt="whatsapp"/></a>
                                <a href="/" >
                                    <Ig alt="instagram"/></a>
                            </div>
                        </div>
                        <div className="mx-6 sm:mx-0 border-t-2 border-gray-100 mt-5">
                            <p className="mt-8 text-gray-300 text-center sm:text-start"> &copy; {dateYear} Hydiet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;