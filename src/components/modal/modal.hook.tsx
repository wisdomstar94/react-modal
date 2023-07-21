import { ReactNode, useCallback, useState } from "react";
import { Modal } from "./modal.component";
import { IModal } from "./modal.interface";

export function useModal(props: IModal.HookProps) {
  const {
    onShowStart,
    onShowComplete,
    onHideStart,
    onHideComplete,
    onBackgroundClick,
  } = props;

  const [isShow, setIsShow] = useState<boolean>(false);
  const [defaultWidth, setDefaultWidth] = useState<number>(props.defaultWidth);
  const [defaultHeight, setDefaultHeight] = useState(props.defaultHeight);
  const [showDuration, setShowDuration] = useState<number | undefined>(props.showDuration);
  const [hideDuration, setHideDuration] = useState<number | undefined>(props.hideDuration);
  
  const [isHideWhenBackgroundTouch, setIsHideWhenBackgroundTouch] = useState(props.isHideWhenBackgroundTouch);
  const [isBackgroundTransperant, setIsBackgroundTransperant] = useState(props.isBackgroundTransperant);
  const [isEnableScroll, setIsEnableScroll] = useState(props.isEnableScroll);

  const show = useCallback(() => {
    setIsShow(true);
  }, []);

  const hide = useCallback(() => {
    setIsShow(false);
  }, []);

  return {
    isShow,
    defaultWidth,
    defaultHeight,
    showDuration,
    hideDuration,
    isHideWhenBackgroundTouch,
    isBackgroundTransperant,
    isEnableScroll,

    show,
    hide,

    setDefaultWidth,
    setDefaultHeight,
    setShowDuration,
    setHideDuration,

    setIsHideWhenBackgroundTouch,
    setIsBackgroundTransperant,
    setIsEnableScroll,

    component: (children: ReactNode) => {
      return (
        <Modal
          isShow={isShow}
          isBackgroundTransperant={isBackgroundTransperant}
          isEnableScroll={isEnableScroll}
          defaultWidth={defaultWidth}
          defaultHeight={defaultHeight}
          showDuration={showDuration}
          hideDuration={hideDuration}
          onShowStart={onShowStart}
          onShowComplete={onShowComplete}
          onHideStart={onHideStart}
          onHideComplete={onHideComplete}
          onBackgroundClick={() => {
            if (isHideWhenBackgroundTouch !== false) {
              setIsShow(false);
            }
            if (typeof onBackgroundClick === 'function') onBackgroundClick();
          }}>
          { children }
        </Modal>
      );
    },
  };
}