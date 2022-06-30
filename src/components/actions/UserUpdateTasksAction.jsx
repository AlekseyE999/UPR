import React, { useState } from "react";
import ReactModal from "react-modal";

const UserUpdateTasksAction = ({ units, firms, updateTasks, ...props }) => {

    const [showModal, setShowModal] = useState(false);

    const [update, setUpdate] = useState({});

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

    console.log(update);

    return (
        <div className="AddTaskAction">
            <button onClick={openModal} {...props}>
                Изменить
            </button>
            <ReactModal style={customStyles} isOpen={showModal}>
                <div>
                <h2>Изменение</h2>
                    <div>

                        <h3>Ед. Изм.</h3>

                        <div>
                            <select value={update.unit?.id ?? 0} onChange={e => e.target.value ? setUpdate({...update, unit: units.find((unit) => unit.id == e.target.value)}) :
                                setUpdate({...update, unit: undefined})} className="border border-1 m-1">

                                <option value={0} selected={true}>Не менять</option>
                                {units.map((unit) => <option value={unit.id}>{unit.name}</option>)}
                            </select>
                        </div>
                        <h3>Количество</h3>

                        <div>
                            <input value={update.quantity ?? ''} onChange={e => e.target.value ? setUpdate({...update, quantity: Number(e.target.value)}) :
                                setUpdate({...update, quantity: undefined})} type="number" min={1} max={99} className="border border-1 m-1"></input>

                        </div>
                        <h3>Примечание</h3>

                        <div>
                            <input value={update.description ?? ''} onChange={e => e.target.value ? setUpdate({...update, description: e.target.value}) : 
                                setUpdate({...update, description: undefined})} className="border border-1 m-1"></input>

                        </div>
                        <h3> Отчётный месяц и год</h3>

                        <div>
                            <input value={update.reportingDate?.toISOString()?.slice(0, 7) ?? ''} onChange={e => e.target.value ? setUpdate({...update, reportingDate: new Date(e.target.value)}) :
                                setUpdate({...update, reportingDate: undefined})} type="month" className="border border-1 m-1"></input>
                        </div>
                        <h3>Фирма</h3>

                        <div>
                            <select value={update.firm?.id ?? 0} onChange={e => e.target.value ? setUpdate({...update, firm: firms.find((firm) => firm.id == e.target.value)}) :
                                setUpdate({...update, firm: undefined})} className="border border-1 m-1">

                                <option value={0} selected={true}>Не менять</option>
                                {firms.map((firm) => <option value={firm.id}>{firm.name}</option>)}
                            </select>
                        </div>

                    </div>

                </div>
                <div style={{ height: 20 }}></div>
                <button onClick={closeModal}>Закрыть</button>
                <button onClick={() => updateTasks(update) ? closeModal() :  alert("Ошибка отправки")}>Изменить</button>
            </ReactModal>
        </div>
    );
}

export default UserUpdateTasksAction;