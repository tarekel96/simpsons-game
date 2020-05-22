import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Fade from "react-reveal/Fade";

/**
 * @param { boolean } modal set to true if modal is opened and false if modal is closed
 * @param { function } closeModal function that closes a modal
 * @param { number } score the current score for a player
 * @param { number } topScore saves the top score for a player
 */
const ModalCom = ({ modal, score, closeModal, topScore }) => {
  return (
    <Fragment>
      <Fade clear>
        <Modal isOpen={modal}>
          <ModalHeader className="mx-auto">
            <h1>Game Over</h1>
          </ModalHeader>
          <ModalBody className="mx-auto">
            <h2>
              Your Score: {score} <span>|</span> Top Score: {topScore}
            </h2>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={closeModal} className="mx-auto">
              Restart
            </Button>
          </ModalFooter>
        </Modal>
      </Fade>
    </Fragment>
  );
};

export default ModalCom;
