import React, { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

 const Contacts: FC = () => {
    return (
        <section className={ cx(styles.contacts, 'container')}>
            <p className={styles.title}>Contact info: </p>
            <p className={styles.description}>email: yashchukalex5@gmail.com</p>
        </section>
    )
}

export default Contacts;