import React ,{ useState } from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"; 
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '@trendyol-js/react-carousel';
import  Item  from './yourItem';

function HomeSlider() { 
    return (
<Carousel swiping={true} id="carousel" show="4" useArrowKeys={true} rightArrow={true} leftArrow={true} >
		<Item />
		<Item />
		<Item />
		<Item />
	</Carousel>
        );
    }
    
    export default HomeSlider;
    