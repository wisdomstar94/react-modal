import { ReactNode } from "react";

export declare namespace IDialog {
  export type Mode = 'alert' | 'confirm';

  export interface PositiveCallbackParams {
    id: string | undefined;
  }

  export interface NegativeCallbackParams {
    id: string | undefined;
  }

  export type PositiveCallback = (params: PositiveCallbackParams) => void;
  export type NegativeCallback = (params: NegativeCallbackParams) => void;

  export interface Props {
    id?: string;
    mode: Mode;
    title?: ReactNode;
    message: ReactNode;
    
    positiveButtonTextComponent?: ReactNode;
    onPositiveCallback?: PositiveCallback;

    negativeButtonTextComponent?: ReactNode;
    onNegativeCallback?: NegativeCallback;
  }
}