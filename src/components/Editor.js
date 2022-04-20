import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
function Editor() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="How to use this tool?" size="lg" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Note</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Enter means second point."
                    style={{ height: '50vh' }}
                />
            </Form.Group>
            <Row>
                <Col>
                    <Button variant="danger" type="reset" size="lg" className="w-100">
                        Reset
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" type="submit" size="lg" className="w-100">
                        Submit
                    </Button>
                </Col>
                <Col>
                    <Button variant="success" type="button" size="lg" className="w-100">
                        @voice
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Editor