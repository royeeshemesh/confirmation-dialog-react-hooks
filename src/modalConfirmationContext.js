import React, {useContext, useRef, useState} from "react";
import Modal from "react-bootstrap/Modal";

const ConfirmationModalContext = React.createContext({});

const ConfirmationModalContextProvider = (props) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const resolver = useRef();

    const handleShow = () => {
        setShowConfirmationModal(true);

        return new Promise(function (resolve) {
            resolver.current = resolve;
        });
    };

    const handleOk = () => {
        resolver.current && resolver.current(true);
        setShowConfirmationModal(false)
    };

    const handleCancel = () => {
        resolver.current && resolver.current(false);
        setShowConfirmationModal(false)
    };

    return (
        <ConfirmationModalContext.Provider value={{showConfirmation: handleShow}}>
            {props.children}

            <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)} centered dialogClassName="modal-xs">
                <Modal.Body>
                    <label>Are you sure you want to delete?</label>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-default" onClick={handleCancel}>Cancel</button>
                    <button className="btn btn-primary" onClick={handleOk}>OK</button>
                </Modal.Footer>
            </Modal>

        </ConfirmationModalContext.Provider>
    )
};

export const useConfirmationModalContext = () => useContext(ConfirmationModalContext);
export default ConfirmationModalContextProvider;
