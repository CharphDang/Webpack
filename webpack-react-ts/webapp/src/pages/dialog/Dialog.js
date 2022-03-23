import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
// 局部样式使用方法， 文件命名必须是*.module.less
// import styles from './dialog.module.less';
import styles from './dialog.module';

function Dialog(props) {
    const { isShow, setIsShow } = props;
    const node = document.createElement('div');
    document.body.appendChild(node);
    useEffect(() => {
        return () => {
            document.body.removeChild(node);
        };
    }, [node]);
    return (
        <div>
            {isShow
                ? createPortal(
                      <div className={styles.container}>
                          <div className={styles.dialog}>
                              <div className={styles.head}>
                                  <div className={styles.title}>头部</div>
                                  <span
                                      className={styles.closeIcon}
                                      onClick={() => {
                                          setIsShow(false);
                                      }}
                                  >
                                      X
                                  </span>
                              </div>
                              <div className={styles.body}>身体</div>
                          </div>
                      </div>,
                      node
                  )
                : null}
        </div>
    );
}

export default Dialog;
