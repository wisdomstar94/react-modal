import { useEffect, useRef } from "react";
import { Props } from "./modal.interface";
import styles from './modal.module.css';
import { Transition } from '@wisdomstar94/react-transition';

export function Modal(props: Props) {
  const openTimeout = 300;
  const hideTimeout = 300;
  const { isShow, setIsShow } = props;
  const modalId = props.modalId;
  const modalClassName = props.modalClassName;
  const modalBgClassName = props.modalBgClassName;
  const modalWidth = props.modalWidth ?? 600;
  const modalHeight = props.modalHeight ?? 360;
  const modalOuterPaddingVertical = props.modalOuterPaddingVertical ?? 24;
  const modalOuterPaddingHorizontal = props.modalOuterPaddingHorizontal ?? 24;
  const onModalOpenEndTimer = useRef<NodeJS.Timeout>();
  const onModalHideEndTimer = useRef<NodeJS.Timeout>();

  function onModalBgClick() {
    if (typeof props.onModalBgClick === 'function') {
      props.onModalBgClick();
    }
  }

  useEffect(() => {
    if (isShow === undefined) return;

    clearTimeout(onModalOpenEndTimer.current);
    clearTimeout(onModalHideEndTimer.current);
    if (isShow) {
      if (typeof props.onModalOpenStart === 'function') {
        props.onModalOpenStart();
      }
      onModalOpenEndTimer.current = setTimeout(() => {
        if (typeof props.onModalOpenEnd === 'function') {
          props.onModalOpenEnd();
        }
      }, openTimeout);
    } else {
      if (typeof props.onModalHideStart === 'function') {
        props.onModalHideStart();
      }
      onModalHideEndTimer.current = setTimeout(() => {
        if (typeof props.onModalHideEnd === 'function') {
          props.onModalHideEnd();
        }
      }, hideTimeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  return (
    <>
      <Transition
        classNames={{
          enter: styles['enter'],
          leave: styles['leave'],
        }}
        timeouts={{
          enter: openTimeout,
          leave: hideTimeout,
        }}
        >
        {
          isShow ? 
          /* container */
          <div 
            key={modalId}
            className={styles['modal-root-contaienr']}
            >
            {/* background */}
            <div 
              className={[styles['background'], modalBgClassName ?? ''].join(' ')}
              onClick={onModalBgClick} />
            {/* modal */}
            <div 
              className={[styles['modal'], modalClassName].join(' ')}
              style={{
                width: `${modalWidth}px`,
                height: `${modalHeight}px`,
                maxWidth: `calc(100% - ${modalOuterPaddingHorizontal * 2}px)`,
                maxHeight: `calc(100% - ${modalOuterPaddingVertical * 2}px)`,
              }}
              >
              { props.children }
            </div>
          </div>
          : null
        }
      </Transition>
    </>
  );
}