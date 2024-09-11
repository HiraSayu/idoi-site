import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import "./newsCardStyle.css";



export default class NewsCard extends React.Component{

  render(){
  return(
    <div class="NewsCard">
      <Divider/>
      <p className='title'>{this.props.title}</p>
      <p className='date'>{this.props.date}</p>
      <p className='content'>{this.props.content}</p>
    </div>
  );
}
  /*
  return (
    <Card  className="card" sx={{ minWidth: 500 }}>
       
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          2024年4月11日
        </Typography>
        <Divider/>
        <Typography variant="h5" component="div">
          1stアルバム「be{bull}nev{bull}o{bull}lent」リリース!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
  */
}