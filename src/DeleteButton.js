import React from 'react';
import {useConfirmationModalContext} from "./modalConfirmationContext";

const DeleteButton = (props) => {
    const modalContext = useConfirmationModalContext();

    const handleOnClick = async () => {
        const result = await modalContext.showConfirmation();
        result && props.onClick();
    };

    return (
        <button className={props.className} onClick={handleOnClick}>
            {props.children}
        </button>
    )
};

export default DeleteButton;
