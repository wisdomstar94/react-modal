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
        modalId="test-modal"
        modalClassName={""}
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
        모달 내용 입니다~
        <button
          className="inline-flex flex-wrap text-xs text-slate-600 px-3 py-1.5 border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100"
          onClick={() => setIsShow(prev => false)}
          >
          닫기
        </button>
      </Modal>
    </>
  );
}