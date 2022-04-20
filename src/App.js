import React from 'react'
import Nav from './components/Nav'
import Preview from './components/Preview'
import Editor from './components/Editor'
import { Container, Row, Col } from 'react-bootstrap'
function App() {
  return (
    <div className="gp_app">
      <header className="gp_header">
        <Nav title="" />
      </header>
      <main className="gp_main py-3">
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Col xs={6}>
              <Preview />
            </Col>
            <Col xs={6}>
              <Editor />
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="gp_footer">

      </footer>
    </div>
  )
}

export default App