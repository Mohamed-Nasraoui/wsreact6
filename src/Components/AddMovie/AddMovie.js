import React, { useState } from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import '../AddMovie/AddMovie.css'

const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")



    const handleTitle = (e) => {
        setTitle(e.target.value) 
    }
    const handleDescription = (e) => {
        setDescription(e.target.value) 
    }
    const handleRate = (e) => {
        setRate(e.target.value) 
    }
    const handlePosterUrl = (e) => {
        setPosterUrl(e.target.value) 
    }

    
    const handleAdd = () => {
        let newMovie = {title, description, rate, posterUrl}
        add(newMovie)
    }

    return (
        <div>
            
        <>
            <Button variant="primary" onClick={handleShow} >
                ADD MOVIE
            </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>ADD Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label> Movie Title </Form.Label>
                <Form.Control type="text" placeholder='Enter Movie Title' value={title} onChange={handleTitle} />
                <Form.Label> Description </Form.Label>
                <Form.Control type="text" placeholder='Enter Movie Description' value={description} onChange={handleDescription}  /> 
                <Form.Label> Rate </Form.Label>
                <Form.Control type="number" placeholder='Enter Movie Rate' value={rate} onChange={ handleRate} /> 
                <Form.Label> PosterUrl </Form.Label>
                <Form.Control type="url" placeholder='Enter Movie Poster' value={posterUrl} onChange={ handlePosterUrl} /> 
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >Cancel</Button>
            <Button variant="primary" onClick={() => handleAdd()}>ADD Movie </Button>
            </Modal.Footer>
        </Modal>
        </>
        </div>
    )
}

export default AddMovie