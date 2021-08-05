import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form.jsx';
import Fade from 'react-reveal/Fade';

/**
 * @param { boolean } modal set to true if modal is opened and false if modal is closed
 * @param { function } closeModal function that closes a modal
 * @param { number } score the current score for a player
 * @param { number } topScore saves the top score for a player
 */
const ModalCom = ({ modal = false, score = 0, closeModal, topScore }) => {
	let history = useHistory();

	const redirectHome = () => {
		history.push('/');
	};
	return (
		<React.Fragment>
			<Fade clear>
				<Modal isOpen={modal}>
					<ModalHeader className="mx-auto">
						<p
							style={{
								fontSize: '32px',
								fontWeight: 'bold'
							}}
						>
							Game Over
						</p>
					</ModalHeader>
					<ModalBody className="text-center">
						<h2>
							Your Score: {score} <span>|</span> Top Score: {topScore}
						</h2>
						<Form topScore={topScore} />
					</ModalBody>
					<ModalFooter>
						<Button onClick={closeModal}>Restart</Button>
						<Button onClick={redirectHome}>Home</Button>
					</ModalFooter>
				</Modal>
			</Fade>
		</React.Fragment>
	);
};

export default ModalCom;
