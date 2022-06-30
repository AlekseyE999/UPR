import React, { useState } from "react";
import ReactModal from "react-modal";

const SetFiltersAction = ({ firms, units, filter, setFilter, ...props }) => {

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
                <div className="filter">
                    <h2>Фильтр</h2>
                    <div className="task">
                        <h3>Задача</h3>
                        <textarea style={{ height: 60, width: 240 }} value={filter.name ?? ''} onChange={e => setFilter({...filter, name: e.target.value})}></textarea>
                    </div>
                    <div className="units select_item">
                        <h3>Ед. Изм.</h3>
                        <select value={filter.unitId ?? false} onChange={e => setFilter({...filter, unitId: Number(e.target.value)})}>
                            <option selected={true} value={false}>Не выбрано</option>
                            {
                                units.map((unit) =>
                                   <option value={unit.id} key={unit.id}>{unit.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="counts select_item">
                        <h3>Количество</h3>
                        <input value={filter.quantity ?? ''} style={{ width: 60 }} type="number" min={1} max={99} onChange={e => setFilter({...filter, quantity: e.target.value})}></input>
                    </div>
                    <div className="reporting_month select_item">
                        <h3>Отчётный месяц</h3>
                        <select value={filter.month ?? false} onChange={e => setFilter({...filter, month: Number(e.target.value)})}>
                            <option selected={true} value={false}>Не выбрано</option>
                            <option value="0">Январь</option>
                            <option value="1">Февраль</option>
                            <option value="2">Март</option>
                            <option value="3">Апрель</option>
                            <option value="4">Май</option>
                            <option value="5">Июнь</option>
                            <option value="6">Июль</option>
                            <option value="7">Август</option>
                            <option value="8">Сентябрь</option>
                            <option value="9">Октябрь</option>
                            <option value="10">Ноябрь</option>
                            <option value="11">Декабрь</option>
                        </select>
                    </div>
                    <div className="reporting_year select_item">
                        <h3>Отчётный год</h3>
                        <input value={filter.year ?? ''} style={{ width: 100 }} type="number" min={1990} max={2022} onChange={e => setFilter({...filter, year: e.target.value})}></input>
                    </div>
                    <div className="firm select_item">
                        <h3>Фирма</h3>
                        <select value={filter.firmId ?? false} onChange={e => setFilter({...filter, firmId: e.target.value})}>
                            <option selected={true} value={false}>Не выбрано</option>
                            {
                                firms.map((firm) =>
                                    <option value={firm.id}>{firm.name}</option>
                                )
                            }

                        </select>
                    </div>
                </div>
                <div style={{ height: 20 }}></div>
                <button onClick={closeModal}>Закрыть</button>
                <button onClick={() => setFilter({})}>Сбросить фильтры</button>
            </ReactModal>
        </div>
    );
}

export default SetFiltersAction;