import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import SocialRegisterGoogle from './auth/SocialRegisterGoogle'
import SocialRegisterFacebook from './auth/SocialRegisterFacebook'
import SocialRegisterGithub from './auth/SocialRegisterGithub'
import { styles } from '../styles/js/styleModalForm'

const ModalForm = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { googleBtn, facebookBtn, githubBtn } = styles

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Account Not Exist, Sign up now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href='/auth/github'>Signup with Github </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary'>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalForm
