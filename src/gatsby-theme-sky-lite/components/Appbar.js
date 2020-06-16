import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Img from "gatsby-image";
import {
  AppBar,
  Box,
  ButtonBase,
  IconButton,
  Toolbar,
  useMediaQuery,
  Typography,
} from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import {Col} from "react-awesome-styled-grid";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1)
  },
  titleButton: {
    padding: theme.spacing(1),
    borderRadius: "4px",
    transition: "background-color .125s ease",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.25)"
    },
    "&:first-child": {
      // Site title.
      fontFamily:
        "Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif"
    }
  }
}));

const AppBarLinks = ({ links }) => {
  const classes = useStyles();

  return links.map(link => {
    return (
      <ButtonBase
        component={Link}
        to={link.url}
        classes={{ root: classes.titleButton }}
        key={link.title}
      >
        {link.title}
      </ButtonBase>
    );
  });
};

const LogoImg = styled.img`
  display: block;
  margin: 1rem 0;
`
const ButtonBaseHeader = styled(ButtonBase)`
`

export default ({ elevation = 1, onToggleDrawer }) => {
  const classes = useStyles();
  const isXs = useMediaQuery(theme => theme.breakpoints.down("xs"));

  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              components {
                appbar {
                  position
                  links {
                    title
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: {
            title,
            description,
            components: {
              appbar: { links, position }
            }
          }
        }
      }) => (
        <AppBar color="primary" position={position} elevation={elevation}>
          <Toolbar>
            {isXs && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={onToggleDrawer}
              >
                <MdMenu />
              </IconButton>
            )}
            <Box display="flex" flexGrow={1}>
              <ButtonBaseHeader
                component={Link}
                to="/"
                classes={{ root: classes.titleButton }}
              >
                <LogoImg
                    className=''
                    src='/images/logo.png'
                    alt='logo'
                />
                {/*<Typography color="inherit" variant="body1">*/}
                {/*  {description}*/}
                {/*</Typography>*/}
              </ButtonBaseHeader>
            </Box>
            {// Display the appbar action links if the media query breakpoint is larger than Xs.
            !isXs && <AppBarLinks links={links} />}
          </Toolbar>
        </AppBar>
      )}
    />
  );
};
