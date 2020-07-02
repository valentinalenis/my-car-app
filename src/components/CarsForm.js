import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import UseForm from "./UseForm"
import * as actions from "../actions/car";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    consecutivo: '',
    valor: '',
    detalle: '',
    trm: '',
}

const CarsForm = ({classes, ...props}) => {
    
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('consecutivo' in fieldValues)
            temp.consecutivo = fieldValues.consecutivo ? "" : "Campo requerido."
        if ('valor' in fieldValues)
            temp.valor = fieldValues.valor ? "" : "Campo requerido."
        if ('bloodGroup' in fieldValues)
            temp.detalle = fieldValues.detalle ? "" : "Campo requerido.."
        if ('trm' in fieldValues)
            temp.trm = fieldValues.trm ? "" : "Campo requerido.."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = UseForm(initialFieldValues)

     
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
                window.alert('Valido')
            
           
        }
    }

    return (
      <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
          <Grid container>
              <Grid item xs = {6}>
                  <TextField
                      name = "consecutivo" 
                      variant = "outlined" 
                      label = "Consecutivo"
                      value = {values.consecutivo}
                      OnChange={ handleInputChange }
                      helperText={errors.consecutivo}
                      {...(errors.consecutivo && {error:true, helperText: errors.consecutivo})}
                  />
                   <TextField
                      name="valor" 
                      variant="outlined" 
                      label="Valor"
                      value = {values.valor}
                      OnChange={ handleInputChange }
                      {...(errors.valor && {error:true, helperText: errors.valor})}
                  />
                  <TextField
                      name="trm" 
                      variant="outlined" 
                      label="Trm"
                      value = {values.trm}
                      OnChange={ handleInputChange }
                      {...(errors.trm && {error:true, helperText: errors.trm})}
                  />
                   <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.detalle && {error:true})}
                    >
                        <InputLabel >Detalle Group</InputLabel>
                        <Select
                            name="detalle"
                            value={values.detalle}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="">Seleccione detalle</MenuItem>
                            <MenuItem value="1">Exitoso</MenuItem>
                            <MenuItem value="2">Fallido</MenuItem>
                            <MenuItem value="3">Prueba</MenuItem>
                        </Select>
                        {errors.detalle && <FormHelperText>{errors.detalle}</FormHelperText>}
                    </FormControl>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Guardar
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                  
                        >
                            Limpiar
                        </Button>
                    </div>
              </Grid>
          </Grid>
      </form>
    )
}

const mapStateToProps = state => ({
    carList: state.car.list
})

const mapActionToProps = {
    createCar: actions.create,
    updateCar: actions.update
}

export default withStyles(styles)(CarsForm);
