import React, { useState } from "react";
import ReactModal from "react-modal";
import Filter from "../Filter";

const SetFiltersAction = (props) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div className="AddTaskAction">
            <button onClick={openModal} {...props}>
                Фильтры
            </button>
            <ReactModal style={customStyles} isOpen={showModal}>
                <Filter />
                <button onClick={closeModal}>
                    Закрыть
                </button>
            </ReactModal>
        </div>
    );
}

export default SetFiltersAction;