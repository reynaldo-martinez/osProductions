import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { EventModal } from '../EventModal';




export const EventCard = ({item}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleShowModal = ()=>{
        setIsOpen(true)
    }


      
  return (
      <div className="card-container" data-aos="fade-up" data-aos-duration='2000'>
          <Card >
            <CardActionArea>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.cantante}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.fecha}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
               
                <Button size="small" onClick={handleShowModal} >
                    Ver más 
                </Button>
                <EventModal isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
            </CardActions>
        </Card>
      </div>
        
    );




}
