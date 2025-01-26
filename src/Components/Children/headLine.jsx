import logo from '../../assets/SafaricomLogo.png'
export default function HeadLine (){

    return (

        <div className="headline">
            <div className="logo">
                <img src={logo} alt="saf" />
            </div>
            <h5>Rectifier installation Progress</h5>
        </div> 
    )
}