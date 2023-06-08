import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import DataTable from "react-data-table-component"

export const Grid = ({ gridHeading, gridData, selectableRows, pending, setFilaSeleccionada, idBuscar }) => {
    const [id, setId] = useState(-1);
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

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

    // Estilos  
    const customStyles = {      
        headCells: {
            style: {            
                fontSize: '16px',
                color: '#005CB8'
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
                fontSize: '14px',           
            },
        },
    }       


    return(
        <>
            <DataTable className='table table-sm'
                customStyles={customStyles}
                columns={gridHeading}
                data={gridData}
                selectableRows={selectableRows}              
                fixedHeader
                selectableRowsSingle
                pagination       
                paginationComponentOptions={paginationComponentOptions}         
                striped
                noHeader
                dense={ false}
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