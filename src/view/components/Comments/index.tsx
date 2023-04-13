import React, { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

 const Comments: FC = () => {
    return (
        <section className={ cx(styles.contacts, 'container')}>
            <p className={styles.title}>Feature Releases:</p>
            <textarea className={styles.textarea} ></textarea>

        </section>
    )
}

export default Comments;