import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Props {
  modalId: string;
  modalBgClassName?: string;
  modalClassName?: string;

  isShow?: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean | undefined>>;

  modalWidth?: number;
  modalHeight?: number;

  modalOuterPaddingVertical?: number;
  modalOuterPaddingHorizontal?: number;
  
  onModalOpenStart?: () => void;
  onModalOpenEnd?: () => void;
  onModalHideStart?: () => void;
  onModalHideEnd?: () => void;
  onModalBgClick?: () => void;

  children: ReactNode;
}