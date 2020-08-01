import React , {useState , useEffect} from 'react'
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import { makeStyles } from '@material-ui/core/styles';
import ReactTooltip from "react-tooltip";

const useStyles = makeStyles(() => ({
    
    available:{
        color: 'green',
        fontSize: '2rem',
        border: '2px solid green',
        marginLeft: '10px',
        '&:hover':{
            backgroundColor: 'green',
            color: 'white',
        }
        
    },
    notAvailable:{
        color: 'grey',
        fontSize: '2rem',
        border: '2px solid grey',
        marginLeft: '10px',
        
        
    },
    sold:{
        color: 'red',
        fontSize: '2rem',
        border: '2px solid red',
        marginLeft: '10px',
        '&:hover':{
            backgroundColor: 'red',
            color: 'white',
        }
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
        <span style={{whiteSpace: "pre-wrap" , wordWrap: 'break-word'}}>
        <MeetingRoomOutlinedIcon className={state} data-tip={available}  />
        {/* <ReactTooltip /> */}
        </span>
    )
}



export default FloorItem
