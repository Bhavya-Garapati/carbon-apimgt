import React from 'react';
import LeftMenuItem from 'AppComponents/Shared/LeftMenuItem';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';

const styles = (theme) => ({
    LeftMenu: {
        backgroundColor: theme.palette.background.leftMenu,
        width: theme.custom.leftMenuWidth,
        textAlign: 'center',
        fontFamily: theme.typography.fontFamily,
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        overflowY: 'auto',
    },
    leftLInkMain: {
        borderRight: 'solid 1px ' + theme.palette.background.leftMenu,
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        cursor: 'pointer',
        backgroundColor: theme.palette.background.leftMenuActive,
        color: theme.palette.getContrastText(theme.palette.background.leftMenuActive),
        textDecoration: 'none',
    },
    detailsContent: {
        display: 'flex',
        flex: 1,
    },
    content: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        marginLeft: theme.custom.leftMenuWidth,
        paddingBottom: theme.spacing(3),
    },
    contentInside: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(2),
    },
});

const LeftMenu = (props) => {
    const { classes, intl } = props;
    console.log('props obj from side nav bar: ', props);
    // console.log('styles are: ', styles());
    return (
        <div className={classes.LeftMenu}>
            <LeftMenuItem
                text={intl.formatMessage({
                    id: 'leftmenu.primary.tasks1',
                    defaultMessage: 'overview',
                })}
                to='/overview'
            />
            <LeftMenuItem
                text={intl.formatMessage({
                    id: 'leftmenu.primary.settings',
                    defaultMessage: 'SETTINGS',
                })}
                to='/overview'
            />
            <LeftMenuItem
                text={intl.formatMessage({
                    id: 'leftmenu.primary.microgateway',
                    defaultMessage: 'MICROGATEWAY',
                })}
                to='/overview'
            />
            <LeftMenuItem
                text={intl.formatMessage({
                    id: 'leftmenu.primary.categories',
                    defaultMessage: 'CATEGORIES',
                })}
                to='/overview'
            />
            <LeftMenuItem
                text={intl.formatMessage({
                    id: 'leftmenu.primary.throttlingpolicies',
                    defaultMessage: 'THROTTLING POLICIES',
                })}
                to='/overview'
            />
            <LeftMenuItem
                text={intl.formatMessage({
                    id: 'leftmenu.primary.botdetection',
                    defaultMessage: 'BOT DETECTION',
                })}
                to='/overview'
            />
            <LeftMenuItem
                text={intl.formatMessage({
                    id: 'leftmenu.primary.analytics',
                    defaultMessage: 'ANALYTICS',
                })}
                to='/overview'
            />
        </div>

    );
};

export default injectIntl(withStyles(styles)(LeftMenu));
