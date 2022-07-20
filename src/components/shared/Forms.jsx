import leafTop from '../../assets/img/leaf-top.png';
import leafBottom from '../../assets/img/leaf-bottom.png';

const Form = () => {

    return (
        <div className="relative">
            <div className="absolute z-10 top-0 right-0 transform -translate-y-1/2 translate-x-1/3 ">
                <img src={leafTop} alt="leaf" className="w-24" />
            </div>
            <div className="absolute z-10 bottom-0 left-0 transform translate-y-1/2 -translate-x-1/2">
                <img src={leafBottom} alt="leaf" className="w-24" />
            </div>

            {/* FORM */}
            <section className="bg-white rounded-lg">
                <div className="py-6 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <form className="bg-white text-gray-800 space-y-8 p-4">
                        <div>
                            <label htmlFor="Lastname" className="block mb-2 text-sm font-medium">First Name</label>
                            <input type="text" className="border block p-3 w-full text-sm border-gray-200 shadow-xs rounded-lg focus:border-primary outline-none" required />
                        </div>
                        <div>
                            <label htmlFor="Firstname" className="block mb-2 text-sm font-medium">Last Name</label>
                            <input type="text" className="border block p-3 w-full text-sm border-gray-200 shadow-xs rounded-lg focus:border-primary outline-none" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" className="border block p-3 w-full text-sm border-gray-200 shadow-xs rounded-lg focus:border-primary outline-none" placeholder="name@example.com" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Get Early Access</button>
                    </form>
                </div>
            </section>
            
        </div>
    );
}
 
export default Form