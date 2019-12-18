import styles from "../styles/indicator.module.css";
import React, {Component} from 'react';


export default class Indicator extends Component {
    render() {
        return (
            <div className={styles["lds-css"]}>
                <div className={styles['lds-double-ring']}>
                    <div></div><div></div><div><div></div></div><div><div></div></div>
                </div>
            </div>
        )
    }
}