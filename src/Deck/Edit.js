import React, {useEffect, useState }from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { readDeck, updateDeck } from '../utils/api'
import Form from "./Form";

export default function Edit() {
    const [deck, setDeck] = useState({name:"",description:""})
    const history= useHistory()
    const {deckId} = useParams()

    useEffect(loadDeck, [deckId])

    function loadDeck(){
        readDeck(deckId)
        .then(setDeck)
    }

    function submitHandler(updatedDeck){
        updateDeck(updatedDeck)
        .then(()=>{
            history.push(`/decks/${deckId}`)
        })
    }

    const renderForm = deck.id ? (
        <Form onSubmit={submitHandler} initialState={deck}/>
    ) : (
        <p>Loading...</p>
    )

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <span className="oi oi-home"/>Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={`/decks/${deckId}`}>
                            {deck.name}
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Edit Deck
                    </li>
                </ol>
            </nav>
            <h1>Edit Deck</h1>
            {renderForm}
        </div>
    )
}
