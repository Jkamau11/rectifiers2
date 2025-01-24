/* eslint-disable react/prop-types */
export default function Card({partner}){

    const pending = partner.issued - partner.completed;
    const completion = (partner.completed) / partner.issued * 100;

    return (
        <>
        <div className="card-details">
            <div className="card-title">
                <h4>{partner.name}</h4>
            </div>
        
            <div className="card">
                <div className="card-image">
                    <div className="image">
                        
                    </div>
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0rLoMFLWEVGdIiykS1awSTF7yA3rB5C_eQ&s" alt="" /> */}
                </div>

                <div className="card-body">
                    <p>Issued : {partner.issued} </p>
                    <p>Commissioned  :{partner.issued} </p>
                    <p>Integrated : {partner.completed} </p>
                    <p>Pending Integration : {pending} </p>
                    <p className="green"><b>End-End Completion : {completion}%</b> </p>
                </div>
                
            </div>

        </div>

        </>  
    )
}