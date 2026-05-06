type SeatMapProps = {
  selectedId?: string;
};

// 식사 자리 상석 문제에서만 쓰는 간단한 좌석 보조 시각화입니다.
export function SeatMap({ selectedId }: SeatMapProps) {
  const seats = [
    { id: 'B', label: '안쪽 벽', className: 'col-start-1 row-start-1' },
    { id: 'C', label: '통로', className: 'col-start-2 row-start-1' },
    { id: 'D', label: '내 자리', className: 'col-start-1 row-start-2' },
    { id: 'A', label: '출입문', className: 'col-start-2 row-start-2' },
  ];

  return (
    <div className="mt-5 rounded-[8px] border border-line bg-canvas p-3">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-2">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={[
              'flex h-14 items-center justify-center rounded-[8px] border text-sm font-bold transition sm:h-16',
              seat.className,
              selectedId === seat.id
                ? 'border-cta bg-white text-cta'
                : 'border-line bg-white/70 text-muted',
            ].join(' ')}
          >
            {seat.id}. {seat.label}
          </div>
        ))}
      </div>
    </div>
  );
}
