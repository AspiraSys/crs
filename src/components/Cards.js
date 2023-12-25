import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import styles from './Cards.module.css'

const Cards = ({Images, content, navigation, key}) => {

    const navigate = useNavigate();

  return (
   <>
    <Card sx={{ maxWidth: 345 }} key={key} className={styles.cardCont}>
      <CardActionArea className={styles.cardContainer} >
        <CardMedia
          component="img"
        //   height="140"
        //   width="100"
          image={Images}
          alt=""
          className={styles.cardImage}
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography variant="body2" className={styles.contents}>
           {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" onClick={() => navigate(navigation)} className={styles.btns}>
          More
        </Button>
      </CardActions>
    </Card>
   </>
  )
}

export default Cards
