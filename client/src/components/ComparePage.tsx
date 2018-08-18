import * as React from 'react';
import Chart from './Chart';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { DeleteIcon, CloseIcon } from './Icons';

const styles = {
    dialogPaper: {
        minWidth: '850px'
    }
};

interface IComparePageProps {
    classes: any,
    open: boolean,
    pokemon: any[],
    clearPokemonData(event: any): void,
    onClick(open: boolean): any
}

interface IComparePageState {
    open: boolean;
}

class ComparePage extends React.Component<IComparePageProps, IComparePageState> {
    constructor(props: IComparePageProps) {
        super(props);
    }
    
    public handleClose = () => this.props.onClick(false);
    
    public Transition = (props: any) => <Slide direction="up" {...props} />;

    public render() {
        const { classes } = this.props;
        return (
            <div className='ComparePage'>
                <Dialog
                    classes={{paper: classes.dialogPaper}}
                    scroll='body'
                    fullScreen={false}
                    open={this.props.open}
                    TransitionComponent={this.Transition}
                    keepMounted={false}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Stat Comparison"}
                </DialogTitle>
                <DialogContent>
                    <Chart pokemon={this.props.pokemon} />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={this.handleClose}>
                        <CloseIcon />
                        Close
                    </Button>
                    <Button variant="contained" color="secondary" onClick={this.props.clearPokemonData}>
                        <DeleteIcon />
                        Clear
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }

}

export default withStyles(styles)(ComparePage);
