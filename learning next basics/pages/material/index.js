import { Container, Box, Grid } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";
import Header from "../../components/Header";

const useStyles = makeStyles({
    // defining styles
    javascript: {
        background: 'black',
        color: "white",
        margin: "16px"
    },
    react: {
        background: 'red',
        color: "black",
        margin: "16px" // spacing ={1} = 8px 
    }
})

const MyContainer = styled(Container)({
    background: props => props.bg,
    padding: "16"
})

const Index = () => {
    // creating classes
    const classes = useStyles()
    return (
        <>
            <Header/>
            <MyContainer maxWidth="md" bg="cyan" >
                <Grid container spacing={4} direction="row-reverse">
                    <Grid item md={6} lg={8} sm={12}>
                        <Box className={classes.javascript} component="div">
                            <h1> javascript</h1>
                        </Box>
                    </Grid>
                    <Grid item md={6} lg={4} sm={12}>
                        <Box className={classes.react}  component="div">
                            <h1> react</h1>
                        </Box>
                    </Grid>
                </Grid>
            </MyContainer>
        </>
    )
}

export default Index;