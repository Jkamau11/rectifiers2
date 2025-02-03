/* eslint-disable react/prop-types */
export default function Card({partner}){

    const pending = partner.commissioned - partner.integrated;
    const completion = ((partner.integrated) / partner.issued * 100).toFixed(0);


    // console.log(partner);

    return (
        <>
        <div className="card-details">
            <div className="card-title">
                <h4>{partner.name}</h4>
            </div>
        
            <div className="card">
                <div className="card-image">
                    <div className="image">
                        <img src={partner.logo} alt={partner.name} />
                    </div>
                </div>

                <div className="card-body">
                    {/* <div className="card-title">
                        <h4>{partner.name}</h4>
                    </div> */}
                    <p>Issued : {partner.issued} </p>
                    <p>Commissioned  :{partner.commissioned} </p>
                    <p>Integrated : {partner.integrated} </p>
                    <p>Pending Integration : {pending} </p>
                    <p className="green">End-End Completion : {completion}% </p>
                </div>
                
            </div>

        </div>

        </>  
    )
}