import React from 'react';
import '../Styles/App.css'
import Card from './Children/Card';
import HeadLine from './Children/headLine';
import Footer from './Children/Footer';

import broadcom from '/images/broadband.png';
import Tetranet from '/images/Tetranet.png';
import egypro from '/images/egypro.png';
import nextgen from '/images/nextgen.png';
import pavicon from '/images/pavicon.png';
import philfe from '/images/philafe.png';
import powergroup from '/images/powergroup.png';
import blockhain from '/images/blockhain.png';
import camusat from '/images/camusat.png';
import Summary from './Children/summary';
// import WeekDisplay from './Children/WeekDisplay';

export default function App(){

    const data = [
                {
                    id: 1,
                    name: "Broad-com",
                    issued: 7,
                    commissioned: 7,
                    integrated: 5,
                    completed: 0,
                    logo: broadcom
                },
                {
                    id: 2,
                    name: "Tetranet",
                    issued: 18,
                    commissioned: 14,
                    integrated: 10,
                    completed: 0,
                    logo: Tetranet
                },
                {
                    id: 3,
                    name: "Egypro",
                    issued: 6,
                    commissioned: 6,
                    integrated: 5,
                    completed: 0,
                    logo: egypro
                },
                {
                    id: 4,
                    name: "NextGen",
                    issued: 39,
                    commissioned: 34,
                    integrated: 28,
                    completed: 0,
                    logo: nextgen
                },
                {
                    id: 5,
                    name: "Pavicon",
                    issued: 6,
                    commissioned: 6,
                    integrated: 6,
                    completed: 0,
                    logo: pavicon
                },
                {
                    id: 6,
                    name: "Philafe",
                    issued: 41,
                    commissioned: 41,
                    integrated: 38,
                    completed: 0,
                    logo: philfe
                },
                {
                    id: 7,
                    name: "Power group",
                    issued: 40,
                    commissioned: 40,
                    integrated: 37,
                    completed: 0,
                    logo: powergroup
                },
                {
                    id: 8,
                    name: "Block-chain",
                    issued: 35,
                    commissioned: 33,
                    integrated: 25,
                    completed: 0,
                    logo: blockhain
                },
                {
                    id: 9,
                    name: "Camusat",
                    issued: 31,
                    commissioned: 26,
                    integrated: 20,
                    completed: 0,
                    logo : camusat
                }
      ];
      
      const summaryData = {
        totalIssued : data.reduce((acc, curr) => acc + curr.issued, 0),
        totalCommissioned : data.reduce((acc, curr) => acc + curr.commissioned, 0),
        totalIntegrated : data.reduce((acc, curr) => acc + curr.integrated, 0),
      }

    //   console.log(summaryData.totalIssued)
      
    //   console.log(summaryData.totalCommissioned)
      
    //   console.log(summaryData.totalIntegrated)


    const partners = data.map((partner)=>{

        return (
            <Card partner={partner} key={partner.id} />
        )
        
    })

    return(
        <React.Fragment>
            <div className="application">

                <div>
                    < HeadLine /> 
                </div>

                <div className="partners-progress">
                    {partners}
                </div>

                <div>
                    <Summary summaryData={summaryData} />
                </div>

                {/* <div>
                    <WeekDisplay />
                    
                </div> */}

                <div> 
                    <Footer />
                </div>

            </div>

        </React.Fragment>
    )
}
