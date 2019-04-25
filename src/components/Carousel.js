import React, {PropTypes,Component} from 'react';
import '../styles/Style.css';
import {Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import CourtYard from '../images/3D-Court-Yard-Front.JPG';
import Hall from '../images/multipurpose-hall.jpg';
import Mary from "../images/StMary's.jpeg";
import final_solid_gate from "../images/final_solid_gate.jpg";
import Stunners from '../images/stunning-homes.jpg';
import {Style} from "radium";

const carousel = {
    size: {
        height: '50%',
        width: '70%',
        alignContent: 'center',
        textAlign: 'center'
    },
    align: {
        alignContent: 'center'
    },
    fonts: {
        color: "black",
        textAlign: 'center',
        fontSize: '26px'
    }
}

const images = [
    {
        src: CourtYard,
        altText: 'Court Yard',
        caption: 'Court Yard',
    },
    {
        src: Hall,
        altText: 'Multipurpose Hall',
        caption: 'Multipurpose Hall',
    },
    {
        src: Stunners,
        altText: 'Stunning Homes',
        caption: 'Stunning Homes',
    }

]
class Images extends Component{
    constructor(props){
        super(props);
            this.state = {activeIndex: 0};
            this.next = this.next.bind(this);
            this.previous = this.previous.bind(this);
            this.goToIndex = this.goToIndex.bind(this);
            this.onExiting = this.onExiting.bind(this);
            this.onExited = this.onExited.bind(this);
        }
    onExiting(){
        this.animating = true;
    }
    onExited(){
        this.animating = false;
    }
    next(){
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === images.length -1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }
    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? images.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render(){
        const {activeIndex} = this.state;
        const slides =images.map(image =>{
            return(
                <CarouselItem
                    className="carousel-item"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={image.src}>
                    <img src={image.src} alt={image.altText} />
                    <CarouselCaption className="carousel-caption" captionText={image.caption} />
                </CarouselItem>
            );
        });
        return (
            <div className="Carousel">
                <Row>
                    <Col>
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}>
                            <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </Col>
                    <Col>
                        <img src = {final_solid_gate} alt = "final_solid_gate"/>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Images;

/*
    */
