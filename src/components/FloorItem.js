import React , {useState , useEffect} from 'react'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { makeStyles } from '@material-ui/core/styles';
import ReactTooltip from "react-tooltip";

const useStyles = makeStyles(() => ({
    
    available:{
        color: 'green',
        fontSize: '3rem'
        
    },
    notAvailable:{
        color: 'grey',
        fontSize: '3rem'
    },
    sold:{
        color: 'red',
        fontSize: '3rem'
    }
    })
)



function FloorItem({available}) {
    
    const classes = useStyles()
    const [state, setstate] = useState(null)

    useEffect(() => {

        if(available === 'notAvailable'){
            setstate(classes.notAvailable)
        }
        else if( available === 'available'){
            setstate(classes.available)
        }
        else{
            setstate(classes.sold)
        }
    }, [])
    
    return (
        <>
        <MeetingRoomIcon className={state} data-tip={available}  />
        <ReactTooltip />
        </>
    )
}



export default FloorItem
