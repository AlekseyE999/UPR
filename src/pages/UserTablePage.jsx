import React, { useEffect, useState } from "react";
import TasksTable from "../components/TasksTable";
import Menu from "../components/Menu";
import * as API from "../Api";
import UserAddTaskAction from "../components/actions/UserAddTaskAction";
import SetFiltersAction from "../components/actions/SetFiltersAction";

const UserTablePage = ({ jwt }) => {

    console.log("UserTable");

    const [tasks, setTasks] = useState([]);
    const [units, setUnits] = useState([]);
    const [firms, setFirms] = useState([]);
    const [filter, setFilter] = useState({});

    const parseTask = (apiTasks) => {
        return {
            ...apiTasks, selected: false,
            reportingDate: new Date(apiTasks.reportingDate), creationDate: new Date(apiTasks.creationDate)
        }
    }

    useEffect(() => {
        (async () => {

            const { status, data } = await API.getUserTasks(jwt);

            if (status === 200) {

                const tasks = data.map((apiTasks) => parseTask(apiTasks));
                setTasks(tasks);
            }
        })();
    }, [jwt]);

    useEffect(() => {
        (async () => {

            const { status, data } = await API.getUserUnits(jwt);

            if (status === 200) {

                setUnits(data);
            }

        })();
    }, []);

    useEffect(() => {
        (async () => {

            const { status, data } = await API.getUserFirms(jwt);

            if (status === 200) {

                setFirms(data);
            }

        })();
    }, []);

    const onSelectionChange = (index, selected) => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, selected: selected } : task));
    }

    const onSelectAll = () => {
        setTasks(tasks.map((task) => { return { ...task, selected: true } }));
    }

    const onDeselectAll = () => {
        setTasks(tasks.map((task) => { return { ...task, selected: false } }));
    }

    const deleteTasks = async () => {
        const ids = (tasks.filter((task) => task.selected)).map((task) => task.id)
        const result = await API.removeUserTasks(jwt, ids)
        if (result.status === 200) {
            setTasks(tasks.filter((task) => !task.selected))
        }
    }


    const postTask = async (task) => {
        const result = await API.addUserTask(localStorage.token, { ...task, reportingDate: task.reportingDate.toISOString() });

        if (result.status === 201) {

            setTasks([...tasks, parseTask(result.data)]);
            return true;

        }
        else {

            return false
        }
    }

    const passFilter = (task) =>
        (!filter.name || (task.name.includes(filter.name))) &&
        (!filter.unitId || (task.unit.id == filter.unitId)) &&
        (!filter.quantity || (task.quantity == filter.quantity)) &&
        (!filter.firmId || (task.firm.id == filter.firmId)) &&
        (!filter.month || (task.reportingDate.getMonth() == filter.month)) &&
        (!filter.year || (task.reportingDate.getYear() == (filter.year - 1900)))



    return (
        <div className="UserTable">
            <Menu className="mb-4" />
            <div className="container">
                <div className="d-flex">
                    <UserAddTaskAction units={units} firms={firms} postTask={postTask} />
                    <SetFiltersAction firms={firms} units={units} filter={filter} setFilter={setFilter} />
                    <button onClick={deleteTasks} >Удалить</button>
                </div>
                <TasksTable tasks={tasks.filter((task) => passFilter(task))} onTaskSelectionChange={onSelectionChange} onSelectAll={onSelectAll} onDeselectAll={onDeselectAll} />
            </div>
        </div>
    );
}

export default UserTablePage;