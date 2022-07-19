import PropTypes from 'prop-types'
import {IoLogoGooglePlaystore, IoLogoApple} from 'react-icons/io5'

const DownloadBtns = ({type}) => {

    return (
        <div className="flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
            <button className={
                (type === 'GLASS') ? 
                "btn btn-ghost bg-gray-100 bg-opacity-30 text-white border-2" : 
                (type === 'SOLID') ? "btn btn-primary border-2" : 
                (type === 'OUTLINE') ? "btn btn-outline btn-primary border-2" : 
                undefined
            }>
                <div className="flex text-start items-center">
                    <div>
                        <IoLogoGooglePlaystore 
                        style={{
                            width: "26.92px",
                            height: "30.47px",
                        }} />
                    </div>
                    <div>
                        <p className="xl:text-sm font-medium p-0" 
                        style={{fontSize:"9px"}}>
                        Available soon on
                        </p>
                        <p className="text-base xl:text-lg font-bold p-0" 
                        style={{fontSize:"16.15px"}}>
                            Andriod
                        </p>
                    </div>
                </div>
            </button>
            <button className={
                (type === 'GLASS') ? 
                "btn btn-ghost bg-gray-100 bg-opacity-30 text-white border-2" : 
                (type === 'SOLID') ? "btn btn-primary border-2" : 
                (type === 'OUTLINE') ? "btn btn-outline btn-primary border-2" : 
                undefined
            }>
                <div className="flex text-start items-center">
                    <div>
                        <IoLogoApple 
                        style={{
                            width: "26.92px",
                            height: "30.47px",
                        }} />
                    </div>
                    <div>
                        <p className="xl:text-sm font-medium" 
                        style={{fontSize:"9px"}}>
                        Available soon on
                        </p>
                        <p className="text-base xl:text-lg font-bold" 
                        style={{fontSize:"16.15px"}}>
                            Apple iOS
                        </p>
                    </div>
                </div>
            </button>
           
        </div>
    );
}

DownloadBtns.defaultProps = {
    type : 'SOLID'
}
DownloadBtns.propTypes = {
    type : PropTypes.string
}
export default DownloadBtns;