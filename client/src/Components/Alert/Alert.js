import React from 'react';
import './Alert.scss';
import alertsReducer from '../../Store/alerts.reducer';

function Alert(props) {
    const [alert, setAlert] = React.useState({
        type: '',
        message: '',
        show: false
    });

    alertsReducer.subscribe(() => {
        setAlert({
            ...alertsReducer.getState(),
            show: true
        });
    });

    const classList = () => {
        if (alert.show) {
            return `alert show ${alert.type}`
        }

        return `alert ${alert.type}`;
    }

    return (
        <div className={classList()}>
            <p>{alert.message}</p>
            <i className="fas fa-times fa-2x" onClick={() => setAlert({ ...alert, show: false })}></i>
        </div>
    );
}

export default Alert;