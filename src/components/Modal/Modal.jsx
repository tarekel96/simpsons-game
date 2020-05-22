import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "../../Form.js";
import Fade from "react-reveal/Fade";

/**
 * @param { boolean } modal set to true if modal is opened and false if modal is closed
 * @param { function } closeModal function that closes a modal
 * @param { number } score the current score for a player
 * @param { number } topScore saves the top score for a player
 */
const ModalCom = ({ modal = false, score = 0, closeModal, topScore = 0 }) => {
  return (
    <>
      <Fade clear>
        <Modal isOpen={modal}>
          <ModalHeader className="mx-auto">
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Game Over
            </p>
          </ModalHeader>
          <ModalBody className="mx-auto">
            <h2>
              Your Score: {score} <span>|</span> Top Score: {topScore}
            </h2>
            <Form />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={closeModal} className="mx-auto">
              Restart
            </Button>
          </ModalFooter>
        </Modal>
      </Fade>
    </>
  );
};

export default ModalCom;
