import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import styled from "styled-components";

const useStyles = makeStyles(() => ({
  cardActions: {
    justifyContent: "flex-end"
  },
  card: {
    background: "transparent"
  },
  cardContent: {
    padding: 12
  },
  gatsbyImageWrapper: {
      minHeight: '220px'
  },
}));

const CardImg = styled(Img)`
  min-height: 220px
`

const CardTypographyH6 = styled(Typography)`
  min-height: 60px
`
const CardContentBlog = styled(CardContent)`
  min-height: 255px
`

export default ({ featuredImage, title, postDate, excerpt, url }) => {
  const classes = useStyles();

  return (
    <Card elevation={0} classes={{ root: classes.card }}>
      <CardImg
        fluid={featuredImage.childImageSharp.fluid}
        style={{ borderRadius: 2 }}
        // classes={{ root: classes.gatsbyImageWrapper }}
      />
      <CardContentBlog classes={{ root: classes.cardContent }}>
        <CardTypographyH6
          gutterBottom
          variant="h6"
          style={{
            marginBottom: 0,
            fontWeight: 600,
            fontFamily:
              "Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
            lineHeight: 1.25
          }}
        >
          {title}
        </CardTypographyH6>
        <Typography variant="caption" color="textSecondary">
          {moment(postDate).format("LL")}
        </Typography>
        <Box marginY={1}>
          <Divider light />
        </Box>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
          style={{ fontFamily: "Merriweather, Georgia, serif" }}
        >
          {excerpt}
        </Typography>
      </CardContentBlog>
      <CardActions classes={{ root: classes.cardActions }}>
        <Button component={Link} to={url} variant="outlined" color="secondary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
