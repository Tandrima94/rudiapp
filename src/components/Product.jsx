import React from "react";
import productImg from "../media/product3.jpg";
import { ReactComponent as DownLogo } from "../media/logo-chevron-down.svg";
// import 'aos/dist/aos.css';

function Product() {
    return (
        <div id="product">
            <div id="productImg">
                <img src= {productImg} alt="product-img"/>
                <div id="productName"> {/*} data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    NON-DESTRUCTIVE EVALUATION PROCESS
                </div>
                <div id="productDetail"> {/*data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">*/}
                    MAINTAINS UNDERGROUND INSPECTION AND MONITORING OF PIPE LEAKAGE AND DETECTION, 
                    LOCALIZATION OF CABLE FAULT, IDENTIFICATION OF DEAD AND LIVE CABLES.
                </div>
                <div className="down-arrow bounce">
                    <DownLogo title='Scroll down' />
                </div>
            </div>
        </div>
    )
}

export default Product;