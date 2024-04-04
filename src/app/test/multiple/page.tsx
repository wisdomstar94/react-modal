"use client"

import { Modal } from "@/components/modal/modal.component";
import { useEffect, useState } from "react";

interface ModalItem {
  modalId: string;
  title: string;
  content: string;
  isShow: boolean | undefined;
  onCancelClick: () => void;
  onConfirmClick: () => void;
}

export default function Page() {
  const [modalItems, setModalItems] = useState<ModalItem[]>([]);

  const [modalId, setModalId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    console.log('@modalItems', modalItems);
  }, [modalItems]);

  return (
    <>
      {
        modalItems.map((item) => {
          return (
            <div key={item.modalId} data-key={item.modalId}>
              <Modal
                modalId={item.modalId}
                modalClassName={"rounded-lg bg-white/0"}
                isShow={item.isShow}
                onModalBgClick={() => {
                  setModalItems(prev => {
                    return prev.map(k => {
                      if (k.modalId !== item.modalId) {
                        return k;
                      }
                      return {
                        ...k,
                        isShow: false,
                      };
                    });
                  });
                }}
                onModalOpenStart={() => {
                  console.log('@onModalOpenStart');
                }}
                onModalOpenEnd={() => {
                  console.log('@onModalOpenEnd');
                }}
                onModalHideStart={() => {
                  console.log('@onModalHideStart');
                }}
                onModalHideEnd={() => {
                  console.log('@onModalHideEnd');
                  setModalItems(prev => {
                    return prev.filter(k => {
                      if (k.modalId !== item.modalId) {
                        return true;
                      }
                      return false;
                    });
                  });
                }}
                >
                <div className="w-full h-full flex flex-col relative overflow-hidden rounded-lg">
                  <div className="w-full h-[56px] flex-shrink-0 box-border p-4 bg-blue-500 text-white">
                    { item.title }
                  </div>
                  <div className="w-full h-full flex flex-wrap overflow-y-scroll relative text-xs text-slate-400 p-4 box-border whitespace-pre-line break-all bg-white">
                    { item.content }
                  </div>
                  <div className="w-full h-[56px] box-border px-4 flex flex-wrap items-center justify-end flex-shrink-0 gap-2 relative bg-white">
                    <button className="inline-flex flex-wrap text-xs cursor-pointer bg-red-300 text-slate-600 hover:bg-red-400 px-3 py-1.5"
                      onClick={() => item.onCancelClick()}
                      >
                      취소
                    </button>
                    <button className="inline-flex flex-wrap text-xs cursor-pointer bg-blue-300 text-slate-600 hover:bg-blue-400 px-3 py-1.5"
                      onClick={() => item.onConfirmClick()}
                      >
                      확인
                    </button>
                  </div>
                </div>
                <div 
                  className="w-[32px] h-[32px] rounded-full bg-black/50 text-sm text-white flex flex-wrap items-center justify-center absolute -top-[12px] -right-[12px] cursor-pointer hover:bg-black"
                  onClick={() => {
                    // setIsShow(prev => false);
                  }}>
                  x
                </div> 
              </Modal>
            </div>
          );
        })
      }

      <div className="w-full fixed bottom-0 left-0 z-50 bg-white">
        <ul>
          <li>
            <label>modalId : </label>
            <input type="text" value={modalId} onChange={(e) => setModalId(e.target.value)} />
          </li>
          <li>
            <label>title : </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </li>
          <li>
            <label>content : </label>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          </li>
        </ul>
        <button
          className="inline-flex flex-wrap text-xs text-slate-600 px-3 py-1.5 border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100"
          onClick={() => {
            console.log('?');
            setModalItems(prev => {
              const newArr = [...prev];
              newArr.push({
                modalId,
                title,
                content,
                isShow: true,
                onCancelClick() {
                  console.log('@onCancelClick', modalId);
                },
                onConfirmClick() {
                  console.log('@onConfirmClick', modalId);
                },
              });
              return newArr;
            })
          }}
          >
          모달 추가
        </button>
      </div>
    </>
  );
}
