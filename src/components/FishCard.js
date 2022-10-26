import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const FishCard = ({speciesName, speciesPhoto, scientificName}) => {

    var cardStyle = {
        display: 'block',
        width: '25vw',
        transitionDuration: '0.3s',
        height: '30vw'
    }
 
  return (
    <Card style={cardStyle} 
        raised
        sx={{
            maxWidth: 280,
            margin: "0 auto",
            
        }}
    >
      <CardMedia
        component="img"
        height="150"
  
      
       
        image={speciesPhoto}
        alt={speciesName}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {speciesName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Scientific Name: </p>
          { scientificName}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default FishCard