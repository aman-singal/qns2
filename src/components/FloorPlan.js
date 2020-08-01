import React, {   useReducer} from 'react'
import produce from "immer"
import FloorItem from './FloorItem'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import shortid from 'shortid'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      marginLeft: '10px'
    },
    root: {
        flexGrow: 1,
        
      },
      paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
      },
      filterHeading:{
          fontWeight: 'bold',
          marginBottom: '30px'
      },
      floorNumber:{
          backgroundColor: '#ebebeb',
          border: '1px solid #d3d3d3',
          padding: '3px',
          marginBottom: '10px',
          fontSize: '14px',
          position: 'relative',
          top: '-10px',
          borderRadius: '5px',
      }
  }));

function FloorPlan({data}) {

    const [filterState, setFilterState ] = React.useState({
        BHK2: false,
        BHK3: false,
      });

    const { BHK2 , BHK3 } = filterState;
    

    const reducer = (state,action) =>{
        
        switch(action.type){

            case '2bhk':
                var updateState = produce(state,draftState =>{
                    draftState.map(item =>{
                            item.data.map(oneItem =>{
                                if(oneItem.type === '2bhk'){
                                    oneItem.master = true
                                }else{
                                    oneItem.master = false
                                }
                            })
                    })
                })
             
                // console.log(updateState)
            return updateState


            case '3bhk':
                var stateUpdater1 = produce(state,draftState =>{
                    draftState.map(item =>{
                            item.data.map(oneItem =>{
                                if(oneItem.type === '3bhk'){
                                    oneItem.master = true
                                }else{
                                    oneItem.master = false
                                }
                            })
                    })
                })
            return stateUpdater1

            case 'original':
            return data

            default:
                return state
        }
    }

    const classes = useStyles();
    const [info, dispatch] = useReducer(reducer, data)

    const handleChange = (event) => {

        setFilterState({ ...filterState, [event.target.name]: event.target.checked });

        if(BHK2 !== BHK3){
            dispatch({type: 'original'})
        }else{
            if(event.target.name === 'BHK2'){
                dispatch({type:'2bhk'})
            }else{
                dispatch({type:'3bhk'})
            }
        }
      };

    return (
   
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.filterHeading}>Unity Type</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox color="primary" checked={BHK2} onChange={handleChange} name="BHK2" />}
                    label="2 BHK"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" checked={BHK3} onChange={handleChange} name="BHK3" />}
                    label="3 BHK"
                />
                </FormGroup>
            </FormControl>
        </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper} style={{overflowX: 'scroll' , overFlowY: 'scroll'}}>
          {info.map((item,Index) =>{
                
                return(
                    <div key={Index} style={{width: 'max-content'}}>
                        <span className={classes.floorNumber}>  Floor - {item.floor}</span> 
                          {item.data.map((OneItem, Index) =>{
                              return(
                                  <FloorItem key={shortid.generate()} available={ OneItem.master === false ?  'notAvailable' : OneItem.status} />
                              )
                              
                          })}
                    </div>
                )  
          })}
          </Paper>
        </Grid>
        
        </Grid>
        </div>
    )
}

export default FloorPlan
