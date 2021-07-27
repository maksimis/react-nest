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
import {gql, useApolloClient} from '@apollo/client';


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
    let [rowNames, setRowNames] = useState({});
    let [showRowNames, setShowRowNames] = useState(['']);
    let [users, setUsers] = useState([]);

    let client = useApolloClient();

    function changeNames(names) {
        if (names.length == 0) return;
        setShowRowNames(() => {
            updateUsers(names);
            return names;
        });
    }

    useEffect(() => {
        client.query({
            query: gql`
                query GetUserProperties {
                    userProperties{
                        propertyName
                        displayName
                    }
                }
            `
        })
            .then((result) => result.data)
            .then((data) => {
                let names = {};
                for(let property of data.userProperties){
                    names[property.propertyName] = property.displayName;
                }

                setRowNames(names);
                changeNames([]);
            })
    }, [])

    function updateUsers(names) {
        if(names.length > 0)
            client.query({
                query: gql`
                query {
                users{
                    ${names.join(' ')}
                }
            }`
            })
                .then((result) => result.data)
                .then((data) => setUsers(data.users));
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
                            {rowNames[name]}
                        </TableCell>
                    ))}
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={uuid()}>
                            {Object.values(user).map((value) => (
                                <TableCell key={uuid()}>
                                    {value}
                                </TableCell>))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}