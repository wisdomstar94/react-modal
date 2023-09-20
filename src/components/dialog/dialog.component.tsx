import { useCallback, useMemo } from "react";
import { IDialog } from "./dialog.interface";

export function Dialog(props: IDialog.Props) {
  const {
    id,
    mode,
    title,
    message,
  } = props;

  const positiveButtonTextComponent = useMemo(() => props.positiveButtonTextComponent ?? <>확인</>, [props.positiveButtonTextComponent]);
  const negativeButtonTextComponent = useMemo(() => props.negativeButtonTextComponent ?? <>취소</>, [props.negativeButtonTextComponent]);

  const onPositiveCallback: IDialog.PositiveCallback = useCallback((params) => {
    if (props.onPositiveCallback === undefined) return;
    props.onPositiveCallback(params);
  }, [props]);

  const onNegativeCallback: IDialog.NegativeCallback = useCallback((params) => {
    if (props.onNegativeCallback === undefined) return;
    props.onNegativeCallback(params);
  }, [props]);

  return (
    <>
      <div className="w-full h-full relative">
        <div className="w-full flex flex-wrap gap-2">
          
          {
            title !== undefined ? 
            <>
              <div className="w-full relative">
                { title }
              </div>
            </>
            : null
          }

          <div className="w-full relative">
            { message }
          </div>

          <div className="w-full flex flex-wrap justify-end items-center">
            {
              mode === 'confirm' ? 
              <button className="inline-flex px-4 py-1 text-xs text-red-500 cursor-pointer hover:bg-slate-50" onClick={() => onNegativeCallback({ id })}>
                { negativeButtonTextComponent }
              </button>
              : null
            }
            <button className="inline-flex px-4 py-1 text-xs text-blue-500 cursor-pointer hover:bg-slate-50" onClick={() => onPositiveCallback({ id })}>
              { positiveButtonTextComponent }
            </button>
          </div>
        </div>
      </div>
    </>
  );
}