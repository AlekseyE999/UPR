import React, { useEffect, useState } from "react";

import TasksTable from "../components/TasksTable";
import Filter from "../components/Filter";
import Menu from "../components/Menu";
import Loading from "../components/Loading";
import * as API from "../Api";
import UserAddTaskAction from "../components/actions/UserAddTaskAction";
import SetFiltersAction from "../components/actions/SetFiltersAction";

const UserTablePage = ({ jwt }) => {

    console.log("UserTable");

    const [tasks, setTasks] = useState([]);
    const [units, setUnits] = useState([]);
    const [firms, setFirms] = useState([]);

    useEffect(() => {
        (async () => {

            const { status, data } = await API.getUserTasks(jwt);

            if (status === 200) {

                const tasks = data.map((task) => {
                    return {
                        ...task, selected: false,
                        reportingDate: new Date(task.reportingDate), creationDate: new Date(task.creationDate)
                    }
                });
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

    return (
        <div className="UserTable">
            <Menu className="mb-4" />
            <div className="container">
                <div className="d-flex">
                    <UserAddTaskAction units={units} firms={firms}/>
                    <SetFiltersAction />
                </div>
                <TasksTable tasks={tasks} onTaskSelectionChange={onSelectionChange} onSelectAll={onSelectAll} />
            </div>
        </div>
    );
}

export default UserTablePage;