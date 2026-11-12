import { Media, type MediaBaseProps } from '../_shared/Media';

export interface TrainingImageCompactProps extends MediaBaseProps {
  /** image: 1 */
  image?: 1;
}

/** Training Image / Compact — Figma 40000429:3342. Фото 164×132, border radius/4. Используется в Training Card / Compact. */
export function TrainingImageCompact({ image: _image = 1, ...rest }: TrainingImageCompactProps) {
  return <Media format="trainingCompact" data-image={_image} {...rest} />;
}
