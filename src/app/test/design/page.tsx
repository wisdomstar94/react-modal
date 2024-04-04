"use client"

import { Modal } from "@/components/modal/modal.component";
import { useState } from "react";

export default function Page() {
  const [isShow, setIsShow] = useState<boolean>();

  return (
    <>
      <ul className="w-full flex flex-wrap relative gap-2">
        <li className="w-full flex flex-wrap relative gap-2">
          <button
            className="inline-flex flex-wrap text-xs text-slate-600 px-3 py-1.5 border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100"
            onClick={() => setIsShow(prev => true)}
            >
            모달 열기
          </button>
        </li>
      </ul>
      <Modal
        modalId={"test-modal"}
        modalClassName={"rounded-lg"}
        isShow={isShow}
        setIsShow={setIsShow}
        onModalBgClick={() => setIsShow(prev => false)}
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
        }}
        >
        <div className="w-full h-full flex flex-col relative overflow-hidden rounded-lg bg-white">
          <div className="w-full h-[56px] flex-shrink-0 box-border p-4 bg-blue-500 text-white">
            [안내]
          </div>
          <div className="w-full h-full flex flex-wrap overflow-y-scroll relative text-xs text-slate-400 p-4 box-border">
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
            안녕하세요. <br />
          </div>
          <div className="w-full h-[56px] box-border px-4 flex flex-wrap items-center justify-end flex-shrink-0 gap-2 relative">
            <button className="inline-flex flex-wrap text-xs cursor-pointer bg-red-300 text-slate-600 hover:bg-red-400 px-3 py-1.5">
              취소
            </button>
            <button className="inline-flex flex-wrap text-xs cursor-pointer bg-blue-300 text-slate-600 hover:bg-blue-400 px-3 py-1.5">
              확인
            </button>
          </div>
        </div>
        <div 
          className="w-[32px] h-[32px] rounded-full bg-black/50 text-sm text-white flex flex-wrap items-center justify-center absolute -top-[12px] -right-[12px] cursor-pointer hover:bg-black"
          onClick={() => {
            setIsShow(prev => false);
          }}>
          x
        </div> 
      </Modal>
    </>
  );
}
