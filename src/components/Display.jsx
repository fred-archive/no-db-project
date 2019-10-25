import React from 'react'
import axios from 'axios'
// import routes from '../routes'
import Collection from './Collection'
import { Switch, Route } from 'react-router-dom'
import New from './New'
import Edit from './Edit'



export default class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            editing: false,
            editing2: false
        }
        this.getCards = this.getCards.bind(this)
        this.toggleEditField = this.toggleEditField.bind(this)
        this.toggleEditField2 = this.toggleEditField2.bind(this)
        this.deleteCard = this.deleteCard.bind(this)
    }

    // componentDidMount(){
    //     console.log(this.state.editing)
    // }

    getCards() {
        axios
            .get('/api/collection')
            .then(res => {
                this.setState({
                    cards: res.data,
                    // card: '',
                })
            })
    }

    deleteCard(id){
        axios
        .delete(`/api/collection/${id}`)
        .then(res => {
            this.setState({
                cards: res.data
            })
        })
    }

    toggleEditField() {
        // console.log('fred')
        this.setState({
            editing: !this.state.editing
        })
    }

    toggleEditField2() {
        // console.log('fred')
        this.setState({
            editing2: !this.state.editing2
        })
    }

    render() {
        return (
            <div>
               

{/* here is the bang you need to delete */}
                {this.state.editing ?
                    <New
                        toggleEditFn={this.toggleEditField}
                        getCardsFn={this.getCards}
                        
                    />
                    : null}

                {this.state.editing2 ?
                    <Edit
                        toggleEditFn2={this.toggleEditField2}
                    />
                    : null}

                <Collection
                    cardObj={this.state.cards}
                    getCardsFn={this.getCards}
                    // getCardFn={this.getCard}
                    toggleEditFn={this.toggleEditField}
                    toggleEditFn2={this.toggleEditField2}
                    editing={this.state.editing}
                    deleteCardFn = {this.deleteCard}
                />




            </div>
        )
    }
}