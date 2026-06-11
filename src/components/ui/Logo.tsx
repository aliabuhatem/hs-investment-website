import { CSSProperties } from 'react';

// HS monogram as a pixel/block-grid SVG mark. Monochrome with one orange
// accent block. `currentColor` drives the blocks so it adapts to dark/light.

const H = [
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
];

const S = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

type Props = {
  className?: string;
  withWordmark?: boolean;
  accent?: boolean;
  style?: CSSProperties;
};

export function Logo({
  className,
  withWordmark = false,
  accent = true,
  style,
}: Props) {
  const unit = 6;
  const gap = 1.4;
  const cols = 5;
  const rows = 7;
  const letterW = cols * unit;
  const space = unit * 1.4;
  const totalW = letterW * 2 + space;
  const totalH = rows * unit;

  const blocks = (
    grid: number[][],
    offsetX: number,
    accentCell?: [number, number],
  ) =>
    grid.flatMap((row, r) =>
      row.map((on, c) =>
        on ? (
          <rect
            key={`${offsetX}-${r}-${c}`}
            x={offsetX + c * unit}
            y={r * unit}
            width={unit - gap}
            height={unit - gap}
            rx={0.6}
            fill={
              accent && accentCell && accentCell[0] === r && accentCell[1] === c
                ? 'var(--accent)'
                : 'currentColor'
            }
          />
        ) : null,
      ),
    );

  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 12, ...style }}
    >
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        width={withWordmark ? 40 : 44}
        height={withWordmark ? 40 : 44}
        role="img"
        aria-label="HS Investment Group logo"
        style={{ display: 'block' }}
      >
        {blocks(H, 0, [3, 2])}
        {blocks(S, letterW + space, [3, 4])}
      </svg>
      {withWordmark && (
        <span className="font-display text-sand">
          <span className="block text-[13px] font-semibold leading-none tracking-[0.32em]">
            HS INVESTMENT
          </span>
          <span className="mt-1 block text-[9px] leading-none tracking-[0.4em] text-sand-400">
            GROUP
          </span>
        </span>
      )}
    </span>
  );
}
