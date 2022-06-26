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

    
    const postTask = async (task) => {
        const result = await API.addUserTask(localStorage.token, {...task, reportingDate: task.reportingDate.toISOString()});

        if (result.status === 201) {

            setTasks([...tasks, parseTask(result.data)]);
            return true;
        
        }
        else {

           return false
        }
    }

    return (
        <div className="UserTable">
            <Menu className="mb-4" />
            <div className="container">
                <div className="d-flex">
                    <UserAddTaskAction units={units} firms={firms} postTask={postTask}/>
                    <SetFiltersAction firms={firms} />
                </div>
                <TasksTable tasks={tasks} onTaskSelectionChange={onSelectionChange} onSelectAll={onSelectAll} />
            </div>
        </div>
    );
}

export default UserTablePage;