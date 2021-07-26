import React from 'react'
import styled from "styled-components"
import Product from './Product'

function Home() {
    return (
        <HomeWrapper>
            <div className="home">
                <div className="home_container">
                    <img
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
                        alt="banner" />

                    <div className="home__row">
                        <Product
                            id="1"
                            title="AstroAI Air Compressor Tire Inflator Portable Air Pump for Car Tires 12V DC Auto Tire Pump with Digital Pressure Gauge, 100PSI with Emergency LED Light for..."
                            price={23.99}
                            image="https://m.media-amazon.com/images/I/71wpGFWZAjS._AC_SL1500_.jpg"
                            rating={5}
                        />
                        <Product
                            id="2"
                            title="Magnelex Car Windshield Sunshade with Bonus Steering Wheel Cover Sun Shade. 210T Reflective Polyester Blocks Heat and Sun. Foldable Sun Shield That Keeps..."
                            price={12.66}
                            image="https://m.media-amazon.com/images/I/616VrC5nDcL._AC_SL1500_.jpg"
                            rating={5}
                        />
                    </div>
                    <div className="home__row">
                        <   Product
                            id="3"
                            title="Spigen Tough Armor Designed for Galaxy S21 Ultra Case (2021) - Black"
                            price={17.99}
                            image="https://m.media-amazon.com/images/I/61+ae+-XfAL._AC_SL1000_.jpg"
                            rating={5}
                        />
                        <Product
                            id="4"
                            title="Brightup Beard Trimmer, Cordless Hair Clippers Hair Trimmer for Men, Waterproof Body Mustache Nose Ear Facial Cutting Groomer, Electric Shaver All in 1..."
                            price={26.69}
                            image="https://m.media-amazon.com/images/I/81Q9ImolplS._AC_SL1500_.jpg"
                        />
                        <Product
                            id="5"
                            title="Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery, Midnight Blue/Gold, One Size (S & L Bands...p"
                            price={198.95}
                            image="https://m.media-amazon.com/images/I/61FKUFQ7XiS._AC_SL1500_.jpg"
                            rating={5}
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="6"
                            title="HP Pavilion x360 14 2-in-1 Laptop, 10th Generation Intel Core i5-10210U Processor, 8 GB Ram, 512 GB SSD Storage, 14” Full HD Touch Screen, Windows 10..."
                            price={799.99}
                            image="https://m.media-amazon.com/images/I/813HWdtyHDL._AC_SL1500_.jpg"
                            rating={5}
                        />
                    </div>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home


const HomeWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    margin-top: 39px;


.home{
    display: flex;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
    

}

.home__row{
    display: flex;  
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;

}

.home__image{
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1),rgba(0, 0, 0, 0) );
}


`