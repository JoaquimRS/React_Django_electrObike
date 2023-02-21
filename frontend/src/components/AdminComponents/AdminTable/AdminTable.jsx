import "./AdminTable.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCreateStations, useDeleteStations, useUpdateStations } from "../../../hooks/useAdminStations";
import { useCreateSlots, useDeleteSlots, useUpdateSlots } from "../../../hooks/useAdminSlots";
import { useCreateBikes, useDeleteBikes, useUpdateBikes } from "../../../hooks/useAdminBikes";
import { useCreateNotifications, useDeleteNotifications } from "../../../hooks/useAdminNotifications";

export default function AdminTable({ columns, c_data, entity, updateEntity }) {
    const [data, setData] = useState(c_data)
    const [modValues, setModValues] = useState({})
    const [newRow, set_newRow] = useState(false)
    const [newValues, setNewValues] = useState({})

    const dispatch = useDispatch()
    useEffect(() => {
        setData(c_data)
    }, [c_data])

    const toastr = (type, msg) => {
        dispatch({
            type: 'SET_TOASTR', payload: {
                type: type,
                message: msg,
                show: true
            }
        })
    }
    const deleteRow = (row, rowIndex) => {
        let stringifyRow = JSON.stringify(row)
        // Delete Hook
        eval(`useDelete${entity}(${stringifyRow})`)
            .then((response) => {
                let newData = [...data]
                newData.splice(rowIndex, 1)
                setData(newData)
                toastr("success", response.msg);
            })
            .catch((error) => { 
                let msg
                try {msg = (Object.keys(error.response.body)[0] == "detail" ? "" : Object.keys(error.response.body)[0].toUpperCase()) + " " + error.response.body[Object.keys(error.response.body)[0]]} 
                catch (error) {msg = "Ha ocurrido un error"}     
                toastr("error", msg);
            });
        
    };
    const add_newRow = () => {
        set_newRow(true)
    }

    const changeNewInput = (key, val) => {
        const newNewValues = { ...newValues }
        newNewValues[key] = val
        setNewValues(newNewValues)
    }


    const save_newRow = () => {
        let check = true
        const newData = [...data]
        columns.map((column) => {
            // If Column is require and empty
            if (!newValues[column.name] && column.require) {
                check = false
                toastr('error', `La columna ${column.name.toUpperCase()} no puede ser vacia`)
            }
        })
        if (check) {

            let stringifyNewValues = JSON.stringify(newValues)
            // Create Hook
            eval(`useCreate${entity}(${stringifyNewValues})`)
                .then((response) => {
                    Object.keys(response).map(e => { e != 'msg' ? newData.push(response[e]) : null })
                    setData(newData)
                    set_newRow(false)
                    setNewValues({})
                    toastr("success", response.msg);
                })
                .catch((error) => {      
                    let msg
                    try {msg = (Object.keys(error.response.body)[0] == "detail" ? "" : Object.keys(error.response.body)[0].toUpperCase()) + " " + error.response.body[Object.keys(error.response.body)[0]]} 
                    catch (error) {msg = "Ha ocurrido un error"}     
                    toastr("error", msg);
                });
        }
    }

    const editableRow = (index) => {
        const newData = [...data]
        newData[index].editing = true
        setData(newData)
        setModValues(newData[index])
    }

    const save_modRow = (row, index) => {
        const newData = [...data]
        newData[index].editing = false
        let check = true

        let finalData = {}
        columns.map((column) => {
            // If Column is editable
            if (column.edit) {
                // If Column is require and empty
                if (!modValues[column.name] && column.require) {
                    check = false
                    toastr('error', `La columna ${column.name.toUpperCase()} no puede ser vacia`)

                } else {
                    row[column.name] = modValues[column.name]
                    finalData[column.name] = row[column.name]
                }
            }
        })
        if (check) {
            let stringifyFinalData = JSON.stringify(finalData)
            let stringifyRow = JSON.stringify(row)
            // Update Hook
            eval(`useUpdate${entity}(${stringifyFinalData}, ${stringifyRow})`)
                .then((response) => {
                    setData(newData)
                    setModValues({})
                    toastr('success', response.msg)
                })
                .catch((error) => {
                    let msg
                    try {msg = (Object.keys(error.response.body)[0] == "detail" ? "" : Object.keys(error.response.body)[0].toUpperCase()) + " " + error.response.body[Object.keys(error.response.body)[0]]} 
                    catch (error) {msg = "Ha ocurrido un error"}     
                    toastr("error", msg);   
                })
        }
    }

    const changeModInput = (key, val) => {
        const newModValues = { ...modValues }
        newModValues[key] = val
        setModValues(newModValues)
    }


    return (
        <div className="admin-table">
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.name.replace("_", " ")}</th>
                        ))}
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, columnIndex) => (
                                <td key={columnIndex}>
                                    {row.editing ? (
                                        column.edit ? 
                                            ( column.type == "options" ?
                                                <select onChange={(e) => changeModInput(column.name, e.target.value)} defaultValue={  row[column.name] ? row[column.name] : "none"}>
                                                    <option value="none" className="disabled" disabled>Seleccionar Opción</option>
                                                    {column.options.map(option => (
                                                        <option key={option.val} value={option.val}>{option.name}</option>
                                                    ))}
                                                    <option value="">Sin Opción</option>
                                                </select>
                                                : <input
                                                    type={column.type}
                                                    step={column.step}
                                                    placeholder={column.name.toUpperCase()}
                                                    defaultValue={row[column.name]}
                                                    onChange={(e) => changeModInput(column.name, e.target.value)}
                                                />
                                            )
                                        : <p>{row[column.name]}</p>)
                                    : <p>{ column.type == "options" && row[column.name] ? 
                                            ( column.options[column.options.findIndex(o => o.val == row[column.name])] ? column.options[column.options.findIndex(o => o.val == row[column.name])].name : null) 
                                        : row[column.name]}</p>}
                                </td>
                            ))}
                            <td className="action-icons">
                                {row.editing
                                    ? <SaveIcon onClick={() => save_modRow(row, rowIndex)} />
                                    : <>
                                        { updateEntity ? <EditIcon onClick={() => editableRow(rowIndex)} /> : null}
                                        <DeleteIcon onClick={() => deleteRow(row, rowIndex)} />
                                    </>}


                            </td>
                        </tr>
                    ))}
                    {newRow
                        ? <tr className="new-row">
                            {columns.map((column, index) => (
                                <td key={index}>
                                    { column.edit ?
                                        ( column.type == "options" ? 
                                            <select onChange={(e) => changeNewInput(column.name, e.target.value)} defaultValue="none">
                                                <option value="none" className="disabled" disabled>Seleccionar Opción</option>
                                                {column.options.map(option => (
                                                    <option key={option.val} value={option.val}>{option.name}</option>
                                                ))}
                                            </select>
                                            : <input
                                                type={column.type}
                                                step={column.step}
                                                placeholder={column.name.toUpperCase()}
                                                onChange={(e) => changeNewInput(column.name, e.target.value)}
                                            />
                                        )
                                    : <p>-</p> }
                                </td>
                            ))}
                            <td className="action-icons">
                                <SaveIcon onClick={() => save_newRow()} />
                            </td>
                        </tr>
                        : <tr>
                            <td colSpan={columns.length + 1} className="add-row" onClick={() => add_newRow()}>
                                <AddCircleIcon />
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}