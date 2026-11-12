import Image from "next/image";

export function Decorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      <div className="absolute top-4 left-[22px] size-27 rounded-full border-2 border-peach" />
      <div className="absolute top-[373px] left-14 size-30 rounded-full bg-peach" />
      <div className="absolute top-[235px] -left-7 size-14 rotate-12 rounded-lg bg-peach" />
      <Image
        src="/decor/bubble.svg"
        alt=""
        width={32}
        height={32}
        className="absolute top-[214px] left-[141px]"
      />

      <div className="absolute top-[47px] left-[calc(50%-318px)] size-14 rotate-12 rounded-lg border border-peach" />
      <Image
        src="/decor/shape-b.svg"
        alt=""
        width={83}
        height={83}
        className="absolute top-[369px] left-[calc(50%-359px)] rotate-15"
      />
      <div className="absolute top-[43px] left-[calc(50%+237px)] size-8 rounded-full border-2 border-peach" />

      <div className="absolute -top-3 right-[11px] size-[115px] rotate-12 rounded-lg bg-peach" />
      <Image
        src="/decor/spark.svg"
        alt=""
        width={61}
        height={61}
        className="absolute top-[82px] right-[203px]"
      />
      <Image
        src="/decor/cube.svg"
        alt=""
        width={160}
        height={160}
        className="absolute top-[180px] right-10"
      />
      <Image
        src="/decor/book.svg"
        alt=""
        width={48}
        height={48}
        className="absolute top-[381px] right-[269px]"
      />
      <div className="absolute top-[429px] right-10 size-8 rounded-full border-2 border-peach" />
      <div className="absolute top-[468px] right-44 size-10 rounded-full bg-peach" />
    </div>
  );
}
