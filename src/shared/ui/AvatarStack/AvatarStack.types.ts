export type Avatar = {
  src: string;
  alt: string;
};

export type AvatarSize = 32 | 40;

export type AvatarStackProps = {
  avatars: readonly Avatar[];
  size?: AvatarSize;
  ringClassName?: string;
  className?: string;
};
