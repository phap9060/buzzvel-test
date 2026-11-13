export type ResponsiveCopy = {
  mobile: string;
  desktop: string;
  mobileLang?: string;
};

type ResponsiveTextProps = {
  text: string | ResponsiveCopy;
};

export function ResponsiveText({ text }: ResponsiveTextProps) {
  if (typeof text === "string") return text;

  return (
    <>
      <span lang={text.mobileLang} className="lg:hidden">
        {text.mobile}
      </span>
      <span className="hidden lg:inline">{text.desktop}</span>
    </>
  );
}
