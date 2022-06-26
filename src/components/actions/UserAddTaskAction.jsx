import React, { useState } from "react";
import ReactModal from "react-modal";

const UserAddTaskAction = ({ units, firms, props }) => {

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
                Добавить
            </button>
            <ReactModal style={customStyles} isOpen={showModal}>
                <div>
                    <div>
                        Название:
                        <div>
                            <input className="border border-1 m-1"></input>
                        </div>

                        Ед. Изм.
                        <div>
                            <select className="border border-1 m-1">
                                {units.map((unit) => <option value={unit.id}>{unit.name}</option>)}
                            </select>
                        </div>
                        
                        Кол-во:
                        <div>
                            <input type="number" className="border border-1 m-1"></input>
                        </div>

                        Прим:
                        <div>
                            <input className="border border-1 m-1"></input>
                        </div>

                        Отч.
                        <div>
                            <input type="month" className="border border-1 m-1"></input>
                        </div>
                        
                        Фирма.
                        <div>
                            <select className="border border-1 m-1">
                                {firms.map((firm) => <option value={firm.id}>{firm.name}</option>)}
                            </select>
                        </div>

                    </div>
                    
                </div>
                <button onClick={closeModal}>Закрыть</button>
            </ReactModal>
        </div>
    );
}

export default UserAddTaskAction;