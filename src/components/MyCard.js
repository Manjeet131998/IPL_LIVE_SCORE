import { Button, Card, CardActions, CardContent, Typography, Grid, Dialog, DialogContent,  DialogContentText, DialogTitle, DialogActions } from '@material-ui/core';
import React,{Fragment, useState} from 'react';
import { getMatchDetail } from '../api/Api';


const MyCard = ({ match }) =>{

    const [detail, setDetail] = useState({})
    const [open, setOpen] = useState(false)

    const handleClick = (id)=>{
        
        getMatchDetail(id).then(data=> {console.log("MATCH DATA",data)
        setDetail(data);
        handleOpen();
    
    
    }).catch(error=>console.log(error));

    };
    const handleClose = ()=>{
        setOpen(false);

    }
    const handleOpen = ()=>{
        setOpen(true);

    }
   


    const getMatchCard = ()=>{

       

       

        return (
            <Card >
                <CardContent>
                    <Grid container justify="center" spacing={4} alignItems="center">
                        <Grid item><Typography variant="h5" > {match["team-1"]} </Typography></Grid>



                        <Grid item>

                            <img style={{width:100}} src = "/images/vs.png" alt=""/>
                        </Grid>




                        <Grid item><Typography variant="h5" > {match["team-2"]}</Typography></Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                    <Button onClick={()=>{
                        handleClick(match.unique_id)
                    }} varient="contained" color= "primary"  >
                        Show Details
                    </Button>
                    <Button varient="contained" color="primary" >
                        Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>

                    </Grid>
                    
                </CardActions>
            </Card>
        )

    };

    const getDialog = ()=>(
        <Dialog open = {open} onClose={handleClose}>
           <DialogTitle id = "alert-dialog-title" >
           
            {"Match Detail.."}
            <DialogContent>

                <DialogContentText id = "alert-dialog-description">
                    <Typography>
                        {detail.stat}
                    </Typography>
                    <Typography>
                        Match  <span style = {{fontStyle:"italic", fontWeight:"bold"}}>
                            {detail.matchStarted? "Started" : "Still not started"}
                            </span> 
                    </Typography>

                    <Typography>
                        Score <span style = {{fontStyle:"italic",fontWeight :"bold"}}>
                            {detail.score}

                        </span>
                    </Typography>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
            </DialogActions>
           </DialogTitle>

        </Dialog>

    )
    return (
        <Fragment>
            {getMatchCard()}
            {getDialog()}
        </Fragment>
    );
        

    
}

export default MyCard;