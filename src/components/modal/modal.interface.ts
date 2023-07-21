import { ReactNode } from "react";

export declare namespace IModal {
  export interface ComponentProps {
    isShow: boolean;
    defaultWidth: number;
    defaultHeight?: number;
    isBackgroundTransperant?: boolean;
    isEnableScroll?: boolean;

    showDuration?: number;
    hideDuration?: number;
    
    onShowStart?: () => void;
    onShowComplete?: () => void;
    onHideStart?: () => void;
    onHideComplete?: () => void;
    onBackgroundClick?: () => void;

    children: ReactNode;
  }

  export interface HookProps {
    defaultWidth: number;
    defaultHeight?: number;
    isBackgroundTransperant?: boolean;
    isEnableScroll?: boolean;
    isHideWhenBackgroundTouch?: boolean;

    showDuration?: number;
    hideDuration?: number;

    onShowStart?: () => void;
    onShowComplete?: () => void;
    onHideStart?: () => void;
    onHideComplete?: () => void;
    onBackgroundClick?: () => void;
  }
}