import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IModal } from './modal.interface';
import styles from './modal.module.css';
import anime from 'animejs/lib/anime.es.js';

export function Modal(props: IModal.ComponentProps) {
  const {
    isShow,
    defaultWidth,
    defaultHeight,
    isBackgroundTransperant,
    isEnableScroll,
    children,

    onBackgroundClick,
    onShowStart,
    onShowComplete,
    onHideStart,
    onHideComplete,
  } = props;

  const modalWidth = useMemo(() => `${defaultWidth}px`, [defaultWidth]);
  const modalHeight = useMemo(() => {
    if (defaultHeight === undefined) return `auto`;
    return `${defaultHeight}px`;
  }, [defaultHeight]);

  const showDuration = useMemo(() => props.showDuration ?? 400, [props.showDuration]);
  const hideDuration = useMemo(() => props.hideDuration ?? 400, [props.hideDuration]);

  const [isRender, setIsRender] = useState<boolean>(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const hideAnimation = useRef<anime.AnimeInstance>();
  const startAnimation = useRef<anime.AnimeInstance>();

  const startShowAnimation = useCallback((onComplete?: () => void) => {
    if (modalContainerRef.current === null) return;
    
    if (typeof onShowStart === 'function') onShowStart();

    hideAnimation.current?.pause();
    startAnimation.current?.pause();
    startAnimation.current = anime({
      targets: [modalContainerRef.current],
      opacity: 1,
      duration: showDuration,
      easing: 'easeOutQuint',
      complete(anim) {
        if (typeof onComplete === 'function') onComplete();
        if (typeof onShowComplete === 'function') onShowComplete();
      },
    });
  }, [onShowComplete, onShowStart, showDuration]);

  const startHideAnimation = useCallback((onComplete?: () => void) => {
    if (modalContainerRef.current === null) return;

    if (typeof onHideStart === 'function') onHideStart();

    hideAnimation.current?.pause();
    startAnimation.current?.pause();
    hideAnimation.current = anime({
      targets: [modalContainerRef.current],
      opacity: 0,
      duration: hideDuration,
      easing: 'easeOutQuint',
      complete(anim) {
        if (typeof onComplete === 'function') onComplete();
        if (typeof onHideComplete === 'function') onHideComplete();
      },
    });
  }, [hideDuration, onHideComplete, onHideStart]);

  useEffect(() => {
    if (isShow) {
      // 보여져야 함..
      if (!isRender) {
        setIsRender(true);
      } else {
        startShowAnimation();
      }
    } else {
      // 가려져야 함..
      startHideAnimation(() => {
        setIsRender(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  useEffect(() => {
    if (isRender) {
      startShowAnimation();
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRender]);

  return (
    <>
      {
        isRender ? 
        <>
          <div className={styles['modal-container']} ref={modalContainerRef}>
            <div 
              className={styles['background']} 
              onClick={() => {
                if (typeof onBackgroundClick === 'function') onBackgroundClick();
              }}>

            </div>

            <div 
              className={[
                styles['modal'],
                isEnableScroll !== false ? styles['scroll'] : styles['disable-scroll'],
              ].join(' ')}
              style={{
                width: modalWidth,
                height: modalHeight,
                backgroundColor: isBackgroundTransperant === true ? `rgba(255, 255, 255, 0)` : undefined,
              }}>
              { children }
            </div>
          </div>
        </> 
        : null
      }
    </>
  );
}