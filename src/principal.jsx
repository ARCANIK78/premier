import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { Collapse, TextField, Container } from '@mui/material'


const PaginaPrincipal = () => {
  const [open, setOpen] = useState(false);
  const [tarea, setTarea] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');
  const [estado, setEstado] = React.useState('');

  const columnas = [
    { field: "id", HeaderName: "ID", with: 90 },
    { field: "tarea", HeaderName: "tarea", with: 200 },
    { field: "descripcion", HeaderName: "descripcion", with: 600 },
    { field: "estado", HeaderName: "estado", with: 200 },
  ];
  const datos = [
    { id: 1, tarea: 'no olvidar', descripcion: 'no olvidar lavar la ropa...', estado: 'pendiente' },
    { id: 2, tarea: 'no olvidar cocinar...', descripcion: 'no olvidar cocinar...', estado: 'pendiente' },
    { id: 3, tarea: 'no olvidar estudiar en la mañana...', descripcion: 'no olvidar estudiar en la mañana...', estado: 'pendinte' },
    { id: 4, tarea: 'no olvidar ducharse...', descripcion: 'no olvidar ducharse...', estado: 'pendiente' },
  ]
  const selectRow =(id)=>5;
  
  const capturar = (id) => {
    if (id.length == 1) {
      let dato = datos.filter(x => x.id = id)[0]
      setOpen(true);
      setTarea(dato.tarea);
      setDescripcion(dato.descripcion);
      setEstado(dato.estado);
      console.log(dato)
    } else { setOpen(false) }
  }
  return (
    <Container maxWidth='lg'>
      <AppBar position="fixed" >
        <Toolbar sx={{ width: '90%', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            App de Tereas
          </Typography>
          <div>
            <Button variant="contained" color="info">
              Editar
            </Button>
            <Button variant="containd" color="error">
              Eliminar
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <DataGrid
        sx={{ mt: 10 }}
        rows={datos}
        columns={columnas}
        autoHeight
        checkboxSelection
        onRowSelectionModelChange={x=> capturar(x)}
      />
      <Collapse in={open} >
        <TextField
          label="Tarea"
          value={tarea}
          onChange={e => setTarea(e.target.value)}
        />
        <TextField
          label="Descripcion"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
        <TextField
          label="Estado"
          value={estado}
          onChange={e => setEstado(e.target.value)}
        />
      </Collapse>
    </Container>
  )
}
export default PaginaPrincipal