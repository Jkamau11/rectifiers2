import React from 'react';
import '../Styles/App.css'
import Card from './Children/Card';
import HeadLine from './Children/headLine';
export default function App(){

    const partners = {
        name : "Block-Chain",
        issued : 40,
        completed : "20"
    }

    return(
        <React.Fragment>
            <div>
                < HeadLine />
            </div>
            <div className="partners-progress">
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
                <Card partner={partners}/>
            </div>
        </React.Fragment>

    )
}