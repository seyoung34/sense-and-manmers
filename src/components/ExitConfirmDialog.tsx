type ExitConfirmDialogProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

// 퀴즈 도중 뒤로가기를 눌렀을 때 진행 상태를 잃는다는 점을 확인하는 모달입니다.
export function ExitConfirmDialog({
  onCancel,
  onConfirm,
}: ExitConfirmDialogProps) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/30 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-confirm-title"
    >
      <section className="w-full max-w-sm rounded-[8px] bg-white p-5 shadow-soft ring-1 ring-black/10">
        <h2
          id="exit-confirm-title"
          className="text-2xl font-black tracking-normal"
        >
          퀴즈를 종료할까요?
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          종료하면 지금까지 고른 답은 저장되지 않아요.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-cta px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
          >
            계속하기
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-ink focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
          >
            종료하기
          </button>
        </div>
      </section>
    </div>
  );
}
