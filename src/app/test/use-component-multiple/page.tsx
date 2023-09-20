"use client"

import { MouseEvent, ReactNode, useCallback, useState } from "react";
import { Modal } from "../../../..";
import { Dialog } from "@/components/dialog/dialog.component";
import { IDialog } from "@/components/dialog/dialog.interface";

export declare namespace IPage {
  export interface ModalItem {
    mode: IDialog.Mode;
    id: string;
    component: ReactNode;
    onPositiveCallback?: IDialog.PositiveCallback;
    onNegativeCallback?: IDialog.NegativeCallback;
    isHide?: boolean;
  }
}

export default function Page() {
  const [modalItems, setModalItems] = useState<IPage.ModalItem[]>();

  const onModalAlertAddClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const nowFixed = Date.now();
    const id = `id_${nowFixed}`;
    setModalItems(prev => (prev ?? []).concat([
      {
        id,
        mode: 'alert',
        component: <>
          { id } 안녕하세요?
        </>,
        onPositiveCallback: (params) => {
          // console.log('@onPositiveCallback.params', params);
          const { id } = params;
          if (id !== undefined) {
            // console.log('@setModalItems');
            setModalItems(prev => prev?.map(k => {
              if (k.id === id) {
                const newK = { ...k };
                newK.isHide = true;
                return newK;
              }
              return k;
            }));
          }
        },
      },
    ]));
  }, []);

  const onModalConfirmAddClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const nowFixed = Date.now();
    setModalItems(prev => (prev ?? []).concat([
      {
        id: Date.now().toString(),
        mode: 'confirm',
        component: <>
          { Date.now().toString() } 안녕하세요? 확인 해주실건가요?
        </>,
        onPositiveCallback: () => {
          console.log('onPositiveCallback.nowFixed', nowFixed);
        },
        onNegativeCallback: () => {
          console.log('onNegativeCallback.nowFixed', nowFixed);
        },
      },
    ]));
  }, []);

  return (
    <>
      {
        modalItems?.map((modalItem, index) => {
          return (
            <Modal
              id={modalItem.id}
              key={modalItem.id + '_' + index}
              defaultWidth={1200}
              isShow={modalItem.isHide !== true}
              onHideComplete={(params) => {
                setModalItems(prev => prev?.filter(k => k.id !== params.id));
              }}>
              <Dialog
                id={modalItem.id}
                mode={modalItem.mode}
                message={modalItem.component}
                onPositiveCallback={modalItem.onPositiveCallback}
                onNegativeCallback={modalItem.onNegativeCallback}
                />
            </Modal>
          );
        })
      }

      <div className="w-full fixed bottom-0 left-0 z-[99999]">
        <button
          className="inline-flex px-6 py-2 text-sm bg-white border border-slate-700 text-slate-700 cursor-pointer hover:bg-slate-100"
          onClick={onModalAlertAddClick}>
          모달 추가하기 (alert)
        </button>
        <button
          className="inline-flex px-6 py-2 text-sm bg-white border border-slate-700 text-slate-700 cursor-pointer hover:bg-slate-100"
          onClick={onModalConfirmAddClick}>
          모달 추가하기 (confirm)
        </button>
      </div>
    </>
  );
}
