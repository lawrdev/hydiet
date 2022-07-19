import Img from '../../assets/img/app-img.png';
import DownloadBtns from '../shared/DownloadBtns';

const Intro = () => {
    return (
        <div className="my-10">
            <div className="md:grid md:grid-cols-12 md:grid-rows-3 md:gap-2 max-w-xl md:max-w-fit mx-auto">
                {/* message */}
                <div className="text-center md:col-span-6 lg:col-span-5 md:text-start md:row-span-2 self-end">
                    <p className="text-3xl xl:text-4xl font-bold">
                        Helping You Stay Healthy With Proper Diet is All We Care About.
                        <span className="text-primary block">
                            Join our Wait-List
                        </span>
                    </p>
                    <p className="text-sm md:text-base font-normal my-5 text-gray-400">
                        Eat healthy, Live healthy
                    </p>
                </div>
                {/* app image */}
                <div className="md:col-span-6 lg:col-span-7 md:row-span-3">
                    <img src={Img} alt="app" className="w-full" />
                </div>
                {/* download btns */}
                <div className="md:col-span-6 lg:col-span-5 md:row-span-1 my-8 md:my-0">
                    <DownloadBtns type='OUTLINE'/>
                </div>
            </div>
        </div>
    );
}
 
export default Intro;