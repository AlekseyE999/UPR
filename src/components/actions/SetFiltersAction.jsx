import React, { useState } from "react";
import ReactModal from "react-modal";
import Filter from "../Filter";
import Option from "../Option";

const SetFiltersAction = ({ firms, units, useFilter, cancelFilter, ...props }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const filter =
    {
        name: null,
        unitId: null,
        quantity: null,
        month: null,
        year: null,
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
                Фильтры
            </button>
            <ReactModal style={customStyles} isOpen={showModal}>
                <div className="filter">
                    <h2>Фильтр</h2>
                    <div className="task">
                        <h3>Задача</h3>
                        <textarea style={{ height: 60, width: 240 }} onChange={e => filter.name = e.target.value}></textarea>
                    </div>
                    <div className="units select_item">
                        <h3>Ед. Изм.</h3>
                        <select onChange={e => filter.unitId = e.target.value}>
                            <option selected={true} hidden></option>
                            {
                                units.map((option) =>
                                    <Option data={option} key={option.id} />
                                )
                            }
                        </select>
                    </div>
                    <div className="counts select_item">
                        <h3>Количество</h3>
                        <input style={{ width: 60 }} type="number" min={1} max={99} onChange={e => filter.quantity = e.target.value}></input>
                    </div>
                    <div className="reporting_month select_item">
                        <h3>Отчётный месяц</h3>
                        <select onChange={e => filter.month =e.target.value}>
                            <option selected={true} hidden></option>
                            <option value="jan">Январь</option>
                            <option value="feb">Февраль</option>
                            <option value="mar">Март</option>
                            <option value="apr">Апрель</option>
                            <option value="may">Май</option>
                            <option value="jun">Июнь</option>
                            <option value="jul">Июль</option>
                            <option value="aug">Август</option>
                            <option value="sep">Сентябрь</option>
                            <option value="oct">Октябрь</option>
                            <option value="nov">Ноябрь</option>
                            <option value="dec">Декабрь</option>
                        </select>
                    </div>
                    <div className="reporting_year select_item">
                        <h3>Отчётный год</h3>
                        <input style={{ width: 100 }} type="number" min={1990} max={2022} onChange={e => filter.year =e.target.value}></input>
                    </div>
                    <div className="firm select_item">
                        <h3>Фирма</h3>
                        <select onChange={e => filter.firmId = e.target.value}>
                            <option selected={true} hidden></option>
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
                <button onClick={() => useFilter(filter)? closeModal() :  alert("Ошибка отправки")}>Отфильтровать</button>
            </ReactModal>
        </div>
    );
}

export default SetFiltersAction;