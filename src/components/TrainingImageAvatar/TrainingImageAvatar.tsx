import { Media, type MediaBaseProps } from '../_shared/Media';

export interface TrainingImageAvatarProps extends MediaBaseProps {
  /** image: 1 */
  image?: 1;
}

/** Training Image / Avatar — Figma 40000432:680. Аватар 56×56, border radius/3. Используется в Training Row. */
export function TrainingImageAvatar({ image: _image = 1, ...rest }: TrainingImageAvatarProps) {
  return <Media format="trainingAvatar" data-image={_image} {...rest} />;
}
