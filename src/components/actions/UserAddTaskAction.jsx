import React, { useState } from "react";
import ReactModal from "react-modal";

const UserAddTaskAction = ({ units, firms, postTask, ...props }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const task =
    {
        name: null,
        unitId: null,
        quantity: null,
        description: null,
        reportingDate: null,
        firmId: null,
    }

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
                        <h3>Название:</h3>
                        <div>
                            <input onChange={e => task.name = e.target.value} className="border border-1 m-1"></input>
                        </div>

                        <h3>Ед. Изм.</h3>

                        <div>
                            <select onChange={e => task.unitId = e.target.value} className="border border-1 m-1">
                                <option selected={true} hidden></option>
                                {units.map((unit) => <option value={unit.id}>{unit.name}</option>)}
                            </select>
                        </div>
                        <h3>Кол-во:</h3>

                        <div>
                            <input onChange={e => task.quantity = e.target.value} type="number" className="border border-1 m-1"></input>
                        </div>
                        <h3>Прим:</h3>

                        <div>
                            <input onChange={e => task.description = e.target.value} className="border border-1 m-1"></input>
                        </div>
                        <h3> Отч.</h3>

                        <div>
                            <input onChange={e => task.reportingDate =new Date(e.target.value)} type="month" className="border border-1 m-1"></input>
                        </div>
                        <h3>Фирма.</h3>

                        <div>
                            <select onChange={e => task.firmId = e.target.value} className="border border-1 m-1">
                                <option selected={true} hidden></option>
                                {firms.map((firm) => <option value={firm.id}>{firm.name}</option>)}
                            </select>
                        </div>

                    </div>

                </div>
                <div style={{ height: 20 }}></div>
                <button onClick={closeModal}>Закрыть</button>
                <button onClick={() => postTask(task)? closeModal() :  alert("Ошибка отправки")}>Добавить</button>
            </ReactModal>
        </div>
    );
}

export default UserAddTaskAction;