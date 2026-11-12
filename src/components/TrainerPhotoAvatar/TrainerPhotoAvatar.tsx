import { Media, type MediaBaseProps } from '../_shared/Media';

export interface TrainerPhotoAvatarProps extends MediaBaseProps {
  /** trainer: 1 | 2 | 3 */
  trainer?: 1 | 2 | 3;
}

/** Trainer Photo / Avatar — Figma 40000421:733. Аватар 56×56, border radius/3. Используется в Trainer Row. */
export function TrainerPhotoAvatar({ trainer: _trainer = 1, ...rest }: TrainerPhotoAvatarProps) {
  return <Media format="trainerAvatar" data-trainer={_trainer} {...rest} />;
}
