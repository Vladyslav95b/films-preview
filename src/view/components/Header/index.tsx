import React, { FC } from 'react';
import styles from './styles.module.scss';
import cx from 'classnames';
import logo from '../../../assets/images/logo.png'

 const Header: FC = () => {
    return (
        <header className={cx(styles.header, 'container') }>
            <div className={styles.logo}>
                <div className={styles.logo__img}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.logo__text}>Films Preview</div>
            </div>
        </header>
    )
}

export default Header;