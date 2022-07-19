import Cards from "../shared/Cards";

const OurServices = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <h2 className="font-bold text-2xl sm:text-3xl pt-5">
                    Our <span className="text-primary">
                        Services
                    </span>
                </h2>
                <p className="font-semibold text-xs sm:text-sm text-gray-400 mt-3 mb-10">
                We provide healthy diet for you daily
                </p>
            </div>
            <div className="my-6">
                <Cards />
            </div>
        </div>
    );
}
 
export default OurServices