import React, { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

 const Features: FC = () => {
    return (
        <section className={ cx(styles.contacts, 'container')}>
            <p className={styles.title}>Feature Releases:</p>
            <p className={styles.description}>1.0.3 Add Youtube trailers</p>
            <p className={styles.description}>1.0.4 More info to Film details page</p>

        </section>
    )
}

export default Features;