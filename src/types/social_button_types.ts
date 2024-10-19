export type SocialButtonType = 'apple' | 'google' | 'facebook';

export type SocialButtonProps = {
  type: SocialButtonType;
  cssClass?: string;
  disabled?: boolean;
};
