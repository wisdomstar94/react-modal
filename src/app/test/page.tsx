"use client"
import { useModal } from "@/components/modal/modal.hook";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const interval = useRef<NodeJS.Timeout>();
  const [timestamp, setTimestamp] = useState<number>();

  const modal = useModal({
    defaultWidth: 1200,
    isBackgroundTransperant: true,
    isEnableScroll: true,
    onShowStart() {
      console.log('@onShowStart');
    },
    onShowComplete() {
      console.log('@onShowComplete');
    },
    onHideStart() {
      console.log('@onHideStart');
    },
    onHideComplete() {
      console.log('@onHideComplete');
    },
  });

  useEffect(() => {
    modal.show();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (interval.current === undefined) {
      // clearInterval(intervalCurrent);
      interval.current = setInterval(() => {
        setTimestamp(Date.now());
      }, 1000);
    }

    const intervalCurrent = interval.current;
    return () => {
      clearInterval(intervalCurrent);
      interval.current = undefined;
    };
  }, []);

  return (
    <>
      <div className="w-full relative">
        <button
          onClick={() => {
            modal.show();
          }}>
          모달 열기
        </button>
      </div>
      {
        modal.component(
          <div className="w-full h-full bg-white">
            이건 모달 내용 입니다...{ timestamp }<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            이건 모달 내용 입니다...<br />
            
          </div>
        )
      }
    </>
  );
}
