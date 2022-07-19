const Cards = () => {
    return (
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* 1st card */}
            <div className="flex flex-col p-1 mx-auto max-w-lg text-center rounded-lg shadow-sm hover:shadow-xl transition duration-300 ease-out border-2 border-gray-100">
                <div className="mx-auto pt-10">
                    <div className="w-24 h-24 rounded-full bg-green-100 ">
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="mb-4 text-lg font-semibold">
                        Meal recommedation services
                    </h3>
                    <p className="font-light text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                        A meal planning board for users who wants to focus on healthy and weight loss diet.
                    </p>
                </div>
            </div>
            <div className="flex flex-col p-2 mx-auto max-w-lg text-center rounded-lg shadow-sm hover:shadow-xl transition duration-300 ease-out border-2 border-gray-100">
                <div className="mx-auto pt-10">
                    <div className="w-24 h-24 rounded-full bg-green-100 ">
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="mb-4 text-lg font-semibold">
                        Meal reminder
                    </h3>
                    <p className="font-light text-gray-500 text-xs sm:text-sm dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sed vel vel ut amet cras nunc dignissim ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sed vel vel ut amet cras nunc dignissim ipsum.
                    </p>
                </div>
            </div>
            <div className="flex flex-col p-2 mx-auto max-w-lg text-center rounded-lg shadow-sm hover:shadow-xl transition duration-300 ease-out border-2 border-gray-100">
                <div className="mx-auto pt-10">
                    <div className="w-24 h-24 rounded-full bg-green-100 ">
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="mb-4 text-lg font-semibold">
                        Take your Asset Control a Step Further.
                    </h3>
                    <p className="font-light text-gray-500 text-xs sm:text-sm dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sed vel vel ut amet cras nunc dignissim ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sed vel vel ut amet cras nunc dignissim ipsum.
                    </p>
                </div>
            </div>

           
        </div>
    );
}
 
export default Cards;