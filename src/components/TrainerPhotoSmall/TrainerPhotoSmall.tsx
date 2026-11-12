import { Media, type MediaBaseProps } from '../_shared/Media';

export interface TrainerPhotoSmallProps extends MediaBaseProps {
  /** trainer: 1 | 2 | 3 */
  trainer?: 1 | 2 | 3;
}

/** Trainer Photo / Small — Figma 40000421:719. Фото 140×172, border radius/3. Используется в Trainer Card / Small. */
export function TrainerPhotoSmall({ trainer: _trainer = 1, ...rest }: TrainerPhotoSmallProps) {
  return <Media format="trainerSmall" data-trainer={_trainer} {...rest} />;
}
