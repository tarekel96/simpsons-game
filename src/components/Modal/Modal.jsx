import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Fade from "react-reveal/Fade";
import Proptypes from "prop-types";

class ModalCom extends React.Component {
  render() {
    return (
      <Fragment>
        <Fade clear>
          <Modal isOpen={this.props.modal} className={this.props.className}>
            <ModalHeader className="mx-auto">
              <h1>Game Over</h1>
            </ModalHeader>
            <ModalBody className="mx-auto">
              <h2>
                Your Score: {this.props.score} <span>|</span> Top Score:{" "}
                {this.props.topScore}
              </h2>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={this.props.closeModal}
                className="mx-auto"
              >
                Restart
              </Button>
            </ModalFooter>
          </Modal>
        </Fade>
      </Fragment>
    );
  }
}

ModalCom.propTypes = {
  modal: Proptypes.bool.isRequired,
  score: Proptypes.number.isRequired,
  topScore: Proptypes.number.isRequired,
  closeModal: Proptypes.func.isRequired
};

export default ModalCom;
