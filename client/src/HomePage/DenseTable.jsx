import {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {v4 as uuid} from 'uuid';
import MultipleSelect from './Selector';
import {gql} from '@apollo/client';
import {useGqlQuery} from "../Shared/ClientHook";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    container: {
        margin: 20,
    }
});

export default function DenseTable() {
    const classes = useStyles();
    let [rowNames, setRowNames] = useState(new Map());
    let [showRowNames, setShowRowNames] = useState([]);
    let [users, setUsers] = useState([]);

    let client = useGqlQuery();

    function changeNames(names) {
        if (names.length === 0) return;
        let sortedNames = [];
        for(let name of rowNames.keys()) {
            if (names.includes(name))
                sortedNames.push(name);
        }
        setShowRowNames(() => {
            updateUsers(sortedNames);
            return sortedNames;
        });
    }

    useEffect(() => {
        client({
            query: gql`
                query GetUserProperties {
                    userProperties{
                        propertyName
                        displayName
                    }
                }
            `,
            onSuccess: ({userProperties}) => {
                let names = new Map();
                for (let property of userProperties) {
                    names.set(property.propertyName, property.displayName);
                }

                setRowNames(names);
                changeNames([]);
            }
        })

    }, [])

    function updateUsers(names) {
        if (names.length > 0)
            client({
                query: gql`
                    query {
                        users{
                            ${names.join(' ')}
                        }
                    }`,
                onSuccess: ({users: newUsers}) => setUsers(newUsers)
            })
    }

    function handleChange(e) {
        const values = e.target.value;
        changeNames(values);
    }

    return (
        <TableContainer component={Paper}>
            <MultipleSelect names={rowNames} selectedNames={showRowNames} handleChange={handleChange}/>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    {showRowNames.map((name) => (
                        <TableCell key={uuid()}>
                            {rowNames.get(name)}
                        </TableCell>
                    ))}
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={uuid()}>
                            {
                                showRowNames.map((name) => (
                                <TableCell key={uuid()}>
                                    {user[name]}
                                </TableCell>))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}