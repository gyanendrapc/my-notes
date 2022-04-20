import React from 'react'
import { ListGroup } from 'react-bootstrap'
function Preview() {
    return (
        <div className="pg_preview">
            <h2 id="pg_note_title" >How to use this tool?</h2>
            <ListGroup as="ol" numbered variant="flush">
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Preview