export const ButtonVariant = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Create: "create",
  Delete: "delete",
};

export type TButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];
