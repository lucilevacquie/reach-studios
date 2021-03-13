import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  media: {
    height: 140,
  },
});

const CardBox = ({ subtitle, img, category }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={subtitle} />
        <CardContent>{subtitle}</CardContent>
        <div>{category}</div>
      </CardActionArea>
    </Card>
  );
};

export default CardBox;
