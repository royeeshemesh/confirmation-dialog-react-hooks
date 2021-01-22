import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import people from './people';
import Table from "react-bootstrap/Table";
import DeleteButton from "./DeleteButton";
import ConfirmationModalContextProvider from "./modalConfirmationContext";

function App() {
    const [list, setList] = useState(people);

    const remove = (id) => {
        list.splice(list.findIndex(person => person.id === id), 1);
        setList([...list]);
    };

    const getRows = () => list.map(person => (
        <tr key={person.id}>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td>{person.email}</td>
            <td>{person.gender}</td>
            <td>{person.ip_address}</td>
            <td>
                <DeleteButton onClick={() => remove(person.id)} className="btn btn-danger">Delete</DeleteButton>
            </td>
        </tr>
    ));

    return (
        <ConfirmationModalContextProvider>
            <Table bordered striped className="w-auto m-auto">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP Address</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {getRows()}
                </tbody>
            </Table>
        </ConfirmationModalContextProvider>
    )
}

export default App;
