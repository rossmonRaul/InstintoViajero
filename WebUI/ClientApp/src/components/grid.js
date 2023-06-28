import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import DataTable from "react-data-table-component"

export const Grid = ({ gridHeading, gridData, selectableRows, pending, setFilaSeleccionada, idBuscar, filterColumns }) => {
    const [id, setId] = useState(-1);
    const [records, setRecords] = useState([]);

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    useEffect(() => {
        setRecords(gridData);
    }, [gridData]);

    const onRowSelected = (row) => { 
        if(row.selectedCount == 1)       
            SeleccionarFila(row.selectedRows[0]);
        else
            DesSeleccionarFila(); 
    }

    const onRowClicked = (row) => {
        if(row[idBuscar] != id)
            SeleccionarFila(row);
        else
            DesSeleccionarFila();
    }

    const SeleccionarFila = (fila) => {
        const tempId = fila[idBuscar];
        if(id !== tempId){
            setId(tempId);
            setFilaSeleccionada(fila);
        }        
    }

    const DesSeleccionarFila = () => {
        if(id != -1 ){
            setId(-1);            
            setFilaSeleccionada({})
        }      
    }

    function handleFilter(event) {
        const newData = gridData.filter(row => {
            return filterColumns.some(column => {
                const value = row[column] || '';
                return value.toString().toLowerCase().includes(event.target.value.toLowerCase());
            });
        });
        setRecords(newData);
    }

    // Estilos  
    const customStyles = {      
        headCells: {
            style: {            
                fontSize: '14px',
                color: '#005CB8',
            },
        },
        rows: {
            highlightOnHoverStyle: {
                backgroundColor: '#FFA07A',
                borderBottomColor: '#FFFFFF',
                borderRadius: '10px',
                outline: '1px solid #FFFFFF',
            },
            selectedHighlightStyle: {
                borderColor: '#FFFFFF',
                borderBottomColor: '#FFFFFF',
                borderRadius: '10px',
                outline: '1px solid #FFFFFF',
            },
        },
        pagination: {
            style: {
                fontSize: '12px',           
            },
        },
    }       


    return(
        <>
            {filterColumns && (              
                <div className="row col-12 row justify-content-end" style={{ padding: 0, margin: 0 }}>
                    <div className="col-3 row">                         
                            <input
                            className="form-control mb-2"
                                type="search"
                                placeholder="Buscar"
                                onChange={handleFilter}
                            />
                        </div>
                    </div>
            )}
            <DataTable className='table table-sm'
                customStyles={customStyles}
                columns={gridHeading}
                data={records}
                selectableRows={selectableRows}              
                fixedHeader
                selectableRowsSingle
                pagination       
                paginationComponentOptions={paginationComponentOptions}         
                striped
                noHeader
                dense={ true}
                noDataComponent="No hay datos para mostrar"
                highlightOnHover
                onRowClicked={onRowClicked}
                onSelectedRowsChange={onRowSelected}
                pointerOnHover
                selectableRowsHighlight
                progressPending={pending}
                progressComponent={<><Spinner animation="border" variant="primary" />&nbsp;Cargando...</>}
                selectableRowSelected={(row) => row[idBuscar] == id}  
                allowRowEvents
                />
        </>
    )
}