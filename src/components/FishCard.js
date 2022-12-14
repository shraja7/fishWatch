import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

const FishCard = ({speciesName, speciesPhoto, scientificName}) => {

    // var cardStyle = {
    //     display: 'block',
    //     width: '25vw',
    //     transitionDuration: '0.3s',
    //     height: '30vw'
    // }
 
  return (
    <Card 
        raised
        sx={{
           width: 345,
 }}
    >
      <CardMedia
        component="img"
        height="250"
        image={speciesPhoto}
        alt={speciesName}
        sx={{  objectFit: "contain" }}
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
        {/* replace white space in name with a dash */}
        <Link to={`/profiles/${speciesName.replace(/\s+/g, '-')}`}>
        
        <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default FishCard