import React, { useState , useReducer} from 'react'
import produce from "immer"
import { makeStyles } from '@material-ui/core/styles';
import FloorItem from './FloorItem'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

function FloorPlan({data}) {

    const classes = useStyles();
    const [filterState, setFilterState ] = React.useState({
        BHK2: false,
        BHK3: false,
        
      });

      const handleChange = (event) => {
          
          
        setFilterState({ ...filterState, [event.target.name]: event.target.checked });

        if(BHK2 || BHK3){
            setFilter(true)
          }
        if(event.target.name === 'BHK2'){
            if(event.target.checked){
                dispatch({type: '2bhk'})
            }else{
                dispatch({type: '2bhk_remove'})
            }
            
        }else{
            if(event.target.checked){
                dispatch({type: '3bhk'}) 
            }else{
                dispatch({type: '3bhk_remove'})
            }
           
        }

        if(!BHK2 && !BHK3){
            setFilter(false)
        }
      };

    const reducer = (state,action) =>{
        switch(action.type){
            case '2bhk':
                var updatedState = produce(state,draftState =>{
                    draftState.map(item => {
                        item.data.map(dataItem =>{
                            if(dataItem.type === '2bhk'){
                                dataItem.display = true
                            }
                        })
                    })

                })
                debugger
                return updatedState


            case '3bhk':
                var updatedState = produce(state,draftState =>{
                    draftState.map(item => {
                        item.data.map(dataItem =>{
                            if(dataItem.type === '3bhk'){
                                dataItem.display = true
                            }
                        })
                    })

                })
                debugger
                return updatedState

            case '2bhk_remove':
                var updatedState = produce(state,draftState =>{
                    draftState.map(item => {
                        item.data.map(dataItem =>{
                            if(dataItem.type === '2bhk'){
                                dataItem.display = false
                            }
                        })
                    })

                })
                debugger
                return updatedState

            case '3bhk_remove':
                var updatedState = produce(state,draftState =>{
                    draftState.map(item => {
                        item.data.map(dataItem =>{
                            if(dataItem.type === '2bhk'){
                                dataItem.display = false
                            }
                        })
                    })

                })
                debugger
                return updatedState


            default:
                return state
        }
    }

    const [filter , setFilter ] = useState(false)
    const [state, dispatch] = useReducer(reducer, data)
    const { BHK2 , BHK3 } = filterState;
    
    return (
        <>
        {state.map(item=>{
            return(
                <div>
                    Floor Number - {item.floor}
                    {item.data.map(floorItem =>{
                        if(filter){
                            if(floorItem.display === false && floorItem.available === false){
                                return(
                                    <FloorItem  available='notAvailable'/>
                                )
                            }
                            else if(floorItem.display  && floorItem.available === false){
                                return(
                                    <FloorItem  available='sold' />
                                )
                            }
                            else if(floorItem.disply && floorItem.available){
                                return(
                                    <FloorItem  available='available' />
                                )
                            }
                        }
                        else{
                            if(floorItem.available){
                                return(
                                    <FloorItem  available='available' />
                                )
                                
                            }else{
                                return(
                                    <FloorItem  available='sold' />
                                )
                                
                            }
                        }
                    })}
 
                </div>
                
            )
        })}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select The filter</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={BHK2} onChange={handleChange} name="BHK2" />}
                        label="2BHK"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={BHK3} onChange={handleChange} name="BHK3" />}
                        label="3BHK"
                    />
                    </FormGroup>
                    
                </FormControl>
            </div>
        </>
    )
}

export default FloorPlan

