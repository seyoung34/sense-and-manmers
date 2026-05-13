import { ConfirmDialog } from '@toss/tds-mobile';

type ExitConfirmDialogProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

// 퀴즈 도중 뒤로가기를 눌렀을 때 진행 상태를 잃는다는 점을 TDS 모달로 확인합니다.
export function ExitConfirmDialog({
  onCancel,
  onConfirm,
}: ExitConfirmDialogProps) {
  return (
    <ConfirmDialog
      open
      title="퀴즈를 종료할까요?"
      description="종료하면 지금까지 고른 답은 저장되지 않아요."
      closeOnBackEvent
      closeOnDimmerClick={false}
      onClose={onCancel}
      cancelButton={
        <ConfirmDialog.CancelButton onClick={onCancel}>
          계속하기
        </ConfirmDialog.CancelButton>
      }
      confirmButton={
        <ConfirmDialog.ConfirmButton onClick={onConfirm}>
          종료하기
        </ConfirmDialog.ConfirmButton>
      }
    />
  );
}
