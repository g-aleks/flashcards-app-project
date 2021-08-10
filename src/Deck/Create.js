import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {createDeck} from "../utils/api"
import Form from "../Deck/Form"

// import Form from "./Form"

export default function Create() {

    const history=useHistory()
    function submitHandler(deck){
        createDeck(deck)
        .then((savedDeck)=>{
            history.push(`decks/${savedDeck.id}`)
        })
    }

    function cancel(){
        history.goBack()
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <span className="oi oi-home"/>Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Create Deck
                    </li>
                </ol>
            </nav>
            <h1>Create Deck</h1>
            <Form onCancel={cancel} onSubmit={submitHandler}/>
        </div>
    )
}
