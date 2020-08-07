import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Card from '../components/Card'

import devgrub from '../assets/images/devgrub.png'
import youtube from '../assets/images/youtube.png'
import evverest from '../assets/images/evverest.png'

class Carousel extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items: [
                 {
                     id: 0,
                     title: 'Dev Grub',
                     subTitle: 'The cookbook for developers',
                     imgSrc: devgrub,
                     link: 'https://devgrub.com',
                     selected: false
                 },
                 {
                     id: 1,
                     title: 'Terry Punk Jerk Guy',
                     subTitle: 'Youtube channel',
                     imgSrc: youtube,
                     link: 'https://www/youtube.com/channel/UCxSITxL2JbF2290GCqieVZw',
                     selected: false
                 },
                 {
                     id: 2,
                     title: 'Evverest',
                     subTitle: 'A social network for developers',
                     imgSrc: evverest,
                     link: 'https://github.com/garettlove8/evverest',
                     selected: false
                 },
             ]
        }
    }
    
handleCardClick = (id, card) => {
    console.log(id)

    let items = [...this.state.items]

    items[id].selected = items[id].selected ? false : true

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false
        }
    })
    
    this.setState({
        items
    })

}

makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}

render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around" >
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel
