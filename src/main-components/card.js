import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  media: {
    height: (props) => props.largeHeadline,
  },
  actions: {
    padding: "16px",
  },
});

const Category = styled.div`
  font-size: 0.8rem;
  color: grey;
`;

const CardBox = ({ subtitle, img, category, largeHeadline = 140 }) => {
  const classes = useStyles({ largeHeadline });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={subtitle} />
        <CardContent>
          <Typography component="h2">{subtitle}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Category>{category}</Category>
      </CardActions>
    </Card>
  );
};

export default CardBox;
