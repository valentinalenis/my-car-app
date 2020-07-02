import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { TextField, Grid } from '@material-ui/core'
import UseForm from "./UseForm"

const initialFieldValues = {
    consecutivo: '',
    valor: '',
    detalle: '',
    trm: '',
}

const CarsForm = props => {
    
    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialFieldValues)

    return (
      <form autoComplete="off" mo validate>
          <Grid container>
              <Grid item xs = {6}>
                  <TextField
                      name = "consecutivo" 
                      variant = "outlined" 
                      label = "Consecutivo"
                      value = {values.consecutivo}
                      OnChange={ handleInputChange }
                  />
                   <TextField
                      name="valor" 
                      variant="outlined" 
                      label="Valor"
                      value = {values.valor}
                      OnChange={ handleInputChange }
                  />
                  <TextField
                      name="detalle" 
                      variant="outlined" 
                      label="Detalle"
                      value = {values.detalle}
                      OnChange={ handleInputChange }
                  />
                  <TextField
                      name="trm" 
                      variant="outlined" 
                      label="Trm"
                      value = {values.trm}
                      OnChange={ handleInputChange }
                  />
                  <div>Detalle</div>
              </Grid>
          </Grid>
      </form>
    )
}

CarsForm.propTypes = {

}

export default CarsForm
