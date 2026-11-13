import Image from "next/image";

export function Decorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      <div className="absolute top-4 left-5.5 size-27 rounded-full border-2 border-peach" />
      <div className="absolute top-93.25 left-14 size-30 rounded-full bg-peach" />
      <div className="absolute top-58.75 -left-7 size-14 rotate-12 rounded-lg bg-peach" />
      <Image
        src="/decor/bubble.svg"
        alt=""
        width={32}
        height={32}
        className="absolute top-53.5 left-35.25"
      />

      <div className="absolute top-11.75 left-[calc(50%-318px)] size-14 rotate-12 rounded-lg border border-peach" />
      <Image
        src="/decor/shape-b.svg"
        alt=""
        width={83}
        height={83}
        className="absolute top-92.25 left-[calc(50%-359px)] rotate-15"
      />
      <div className="absolute top-10.75 left-[calc(50%+237px)] size-8 rounded-full border-2 border-peach" />

      <div className="absolute -top-3 right-2.75 size-28.75 rotate-12 rounded-lg bg-peach" />
      <Image
        src="/decor/spark.svg"
        alt=""
        width={61}
        height={61}
        className="absolute top-20.5 right-50.75"
      />
      <Image
        src="/decor/cube.svg"
        alt=""
        width={160}
        height={160}
        className="absolute top-45 right-10"
      />
      <Image
        src="/decor/book.svg"
        alt=""
        width={48}
        height={48}
        className="absolute top-95.25 right-67.25"
      />
      <div className="absolute top-107.25 right-10 size-8 rounded-full border-2 border-peach" />
      <div className="absolute top-117 right-44 size-10 rounded-full bg-peach" />
    </div>
  );
}
