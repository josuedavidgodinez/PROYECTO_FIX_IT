import React, {Component} from 'react'
import logo from '../img/coche-con-rueda-de-repuesto.png'
import Login from './Login'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';


export default class Cabecera extends Component{
    render(){
        const {titulo,manejaclick } = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
        return(
            <div className="App-header">
                
                <img onClick={manejaclick} /*para enviar algo mas que un string abro llaves*/  src={logo} className="App-logo" alt="logo"/> 
                <h1 className="titulo"> {titulo} </h1>
                <div style= {{  display: "flex" , marginTop: "40px" , height : "140px" , width : "350px" }} > 

                    <form  noValidate autoComplete="off">                        
                        <Login inicio_sesion={true} usuario="Josue Godinez" ></Login>
                         <TextField
                                style= {{ width : "20vmin",backgroundColor: "white" ,borderRadius : "20px" }} /* doble llave es para pasar un objeto
                                las primerra llaves hacen referencia para pasar algo mas que un string y las segundas son del objeto del estilo*/
                                  type="search"
                                  variant="outlined"
                                  margin="normal"
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <SearchIcon />
                                      </InputAdornment>
                                    )
                                            }}
                        />
                    </form>
                    <IconButton  aria-label="add to shopping cart">
                            <AddShoppingCartIcon id="shopping_button"  />
                     </IconButton>         

                   

                </div>
                

            </div>
        )
    }

}