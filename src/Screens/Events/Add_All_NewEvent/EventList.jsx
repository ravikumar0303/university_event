import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container} from '@mui/material';
import { Link } from 'react-router-dom';

function EventList() {

  return (
    <div>
    <Container style={{ height:"70%",width:'90%', textAlign:'center'}}> 
      <br></br>
          <Typography variant='h4'>Birth Anniversary of Gandhi Ji and Shastri Ji</Typography>
         <br/>
         <Typography variant='h6'> Social/Cultural <br />
           Wed, 10/02/2024 - 09:15 to Wed, 10/02/2024 - 18:00  
           </Typography>
           <br/>
           <div style={{textAlign:'left'}}>
             <h5>Venue</h5>
             <h6>CDAC Acts Delhi</h6>
           </div>
           
        <Button component={Link} to="/book-event" variant='contained' color="primary"> BookEvent</Button>     

</Container>
        </div>
        
  );
}
export default EventList