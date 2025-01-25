import React from 'react';
import '../Styles/App.css'
import Card from './Children/Card';
import HeadLine from './Children/headLine';
import Footer from './Children/Footer';
export default function App(){

    const data = [
                {
                    id: 1,
                    name: "Broadcom",
                    issued: 7,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 2,
                    name: "Delta",
                    issued: 18,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 3,
                    name: "Egypro",
                    issued: 6,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 4,
                    name: "NextGen",
                    issued: 39,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 5,
                    name: "Pavicon",
                    issued: 6,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 6,
                    name: "Philafe",
                    issued: 41,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 7,
                    name: "Powergroup",
                    issued: 40,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 8,
                    name: "Block-chain",
                    issued: 35,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 9,
                    name: "Camusat",
                    issued: 31,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                },
                {
                    id: 10,
                    name: "Sites",
                    issued: 223,
                    commissioned: 0,
                    integrated: 0,
                    completed: 0,
                    image: "",
                }
      ];
      
      

    // const partners = {
    //     name : "Block-Chain",
    //     issued : 40,
    //     commisioned : 30,
    //     integrated : 20,
    //     completed : "20"
    // }

    const partners = data.map((partner)=>{

        return (
            <Card partner={partner} key={partner.id} />
        )
        
    })

    return(
        <React.Fragment>
            <div>
                < HeadLine /> 
            </div>

            <div className="partners-progress">
                {partners}
            </div>

            <div> 
                <Footer />
            </div>
        </React.Fragment>
    )
}