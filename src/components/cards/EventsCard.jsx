import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




export const EventCard = ({item}) => {



      
  return (
      <div className="card-container">
          <Card >
            <CardActionArea>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Gaby Hernandez
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.caption}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
               
                <Button size="small" >
                    Ver más 
                </Button>
            </CardActions>
        </Card>
      </div>
        
    );




}
