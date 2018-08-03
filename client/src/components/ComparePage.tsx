import * as React from 'react';
import Chart from './Chart';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import { withStyles, createStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const styles = {
    dialogPaper: {
        minWidth: '850px'
    }
};

const DeleteIcon = () => {
    return (
        <SvgIcon>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </SvgIcon>
    )
}

const CloseIcon = () => {
    return (
        <SvgIcon>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </SvgIcon>
    )
}

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
    
    public handleClose = () => {
        this.props.onClick(false);
    };

    public Transition = (props: any) => {
        return <Slide direction="up" {...props} />;
    }

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
