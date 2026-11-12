import { Media, type MediaBaseProps } from '../_shared/Media';

export interface ClubImageAvatarProps extends MediaBaseProps {
  /** club: 1 */
  club?: 1;
}

/** Club Image / Avatar — Figma 40000432:683. Аватар 56×56, border radius/3. Используется в Club Row. */
export function ClubImageAvatar({ club: _club = 1, ...rest }: ClubImageAvatarProps) {
  return <Media format="clubAvatar" data-club={_club} {...rest} />;
}
