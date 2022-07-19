import DownloadBtns from "../shared/DownloadBtns";

const GetApp = () => {
    return (
        <div className="mt-24">
            <div className="px-2 max-w-5xl mx-auto">
                <div className="text-center">
                    <p className="text-primary tracking-wider font-semibold text-xs sm:text-sm md:text-base lg:text-lg py-5">
                        #LetUsHelpYouEatHealthy
                    </p>
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold pb-8">
                        Available on App
                        Store {'&'} Playstore
                    </h2>
                    <div className="w-fit mx-auto mb-24">
                        <DownloadBtns type='SOLID' />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default GetApp;