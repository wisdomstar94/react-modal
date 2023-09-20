import { ReactNode } from "react";

export declare namespace IModal {
  export interface CommonParams {
    id: string | undefined;
  }

  export interface ComponentProps {
    isShow: boolean;
    id?: string;
    defaultWidth: number;
    defaultHeight?: number;
    isBackgroundTransperant?: boolean;
    isEnableScroll?: boolean;

    showDuration?: number;
    hideDuration?: number;
    
    onShowStart?: (params: CommonParams) => void;
    onShowComplete?: (params: CommonParams) => void;
    onHideStart?: (params: CommonParams) => void;
    onHideComplete?: (params: CommonParams) => void;
    onBackgroundClick?: (params: CommonParams) => void;

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