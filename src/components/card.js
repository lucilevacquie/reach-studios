import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  media: {
    height: (props) => props.largeHeadline,
  },
});

const Category = styled.div`
  padding: 16px;
  flex: 0 0 auto;
`;

const CardBox = ({ subtitle, img, category, largeHeadline }) => {
  const classes = useStyles({ largeHeadline });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={subtitle} />
        <CardContent>
          <Typography component="h2">{subtitle}</Typography>
        </CardContent>
        <Category>{category}</Category>
      </CardActionArea>
    </Card>
  );
};

export default CardBox;
