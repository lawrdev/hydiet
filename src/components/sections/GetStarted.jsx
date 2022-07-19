import BgImg from '../../assets/img/bg-img.png'
import SectionLeaf from '../../assets/img/section-leaf.png'
import Form from '../shared/Forms'
import DownloadBtns from '../shared/DownloadBtns'

const GetStarted = () => {
    const bg = {
        background: `url(${BgImg})`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <div className="mt-24" id="download">
        <div style={bg}>
            <div className="relative">
                <div className="absolute z-50 top-0 left-0 transform -translate-x-1/4 -translate-y-1/2">
                    <img src={SectionLeaf} alt="leaf" className="w-32 md:w-40" />
                </div>
                <div className="px-2 max-w-5xl mx-auto">
                    {/* GRID */}
                    <div className="pt-28 grid grid-cols-1 md:grid-cols-2">
                        <div className="self-center md:justify-self-end">
                            <div className="md:px-5">
                                <h2 className="text-center md:text-start text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white pb-8 md:py-0">
                                    Join the Wait-list to
                                    Get Started.
                                </h2>
                                <div className="md:mt-8">
                                    <DownloadBtns type='GLASS'/>
                                </div>
                            </div>
                        </div>
                        <div className="self-end md:justify-self-end mt-20 md:mt-0">
                            <div className="md:px-5 xl:px-0">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default GetStarted;