import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards(props) {
  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     sx={{ height: 140 }}
    //     image="/static/images/cards/contemplative-reptile.jpg"
    //     title="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {props.name}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
    <div style={{width:"250px",marginLeft:"25px"}}>
    <h2 style={{marginBottom:"20px"}}>Search For FreeLancer</h2>
    <form style={{display: "flex" , flexDirection:"column"}}>
    <input style={{height:"30px", marginBottom:"15px"}}type="text" id="searchBox" placeholder="Search..." />
    <label style={{marginBottom:"10px"}} for="amountPaid">Amount Paid:</label>
    <input type="range" min={0} max={100} value={50} className="slider" id="amountSlider" />
    <p>Selected Amount: <span id="amountValue">50</span></p>
    <label for="skills">Skills:</label>
    <input type="checkbox" id="skill1" name="skills" value="skill1" />
    <label for="skill1">Skill 1</label>
    <input type="checkbox" id="skill2" name="skills" value="skill2" />
    <label for="skill2">Skill 2</label>
    <input type="checkbox" id="skill3" name="skills" value="skill3" />
    <label for="skill3">Skill 3</label>
    <input style={{marginTop:"30px", height:"30px", borderRadius:"5px", backgroundColor:"rgb(56, 209, 106)",color:"white"}} type="submit" value="Search" />
   </form>
  </div>
  );
}

