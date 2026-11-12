import { Media, type MediaBaseProps } from '../_shared/Media';

export interface TrainerPhotoVerticalProps extends MediaBaseProps {
  /** trainer: 1 | 2 | 3 */
  trainer?: 1 | 2 | 3;
}

/** Trainer Photo / Vertical — Figma 40000421:726. Фото 168×168, border radius/6. Используется в Trainer Card / Vertical. */
export function TrainerPhotoVertical({ trainer: _trainer = 1, ...rest }: TrainerPhotoVerticalProps) {
  return <Media format="trainerVertical" data-trainer={_trainer} {...rest} />;
}
