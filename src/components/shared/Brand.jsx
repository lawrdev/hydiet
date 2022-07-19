import logo from '../../assets/img/Hydiet-icon.png'

const Brand = () => {
    return (
        <div className="flex items-center">
            <div className="mr-2">
                <img src={logo} alt="logo" className="w-11 h-10" />
            </div>
            <div>
                <h2 className="tracking-widest font-bold text-primary">
                    Hydiet
                </h2>
            </div>
        </div>
    );
}
 
export default Brand;