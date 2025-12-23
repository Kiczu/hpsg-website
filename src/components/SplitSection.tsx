import Image from "next/image";

type ImageRadius = "none" | "all" | "bl" | "br" | "tl" | "tr";
type WatermarkSide = "auto" | "left" | "right";

type SplitSectionProps = {
  heading: string;
  title?: string;
  body: React.ReactNode;

  imageSrc: string;
  imageAlt: string;

  // layout
  imageSide?: "left" | "right";
  fullBleedImage?: boolean;
  desktopMinHeight?: number;

  // styling
  imageClassName?: string;
  imageHeightClassName?: string;
  contentMaxWidthClassName?: string;
  tintClassName?: string;
  imageFit?: "cover" | "contain";
  imagePaddingClassName?: string;

  // image rounding
  imageRadius?: ImageRadius;
  imageRadiusClassName?: string;

  // watermark
  watermarkSrc?: string;
  watermarkSide?: WatermarkSide;
  watermarkTopClassName?: string;
  watermarkSizeClassName?: string;
  watermarkClassName?: string;
};

const radiusMap: Record<ImageRadius, string> = {
  none: "",
  all: "rounded-2xl",
  bl: "rounded-bl-4xl",
  br: "rounded-br-4xl",
  tl: "rounded-tl-4xl",
  tr: "rounded-tr-4xl",
};

const SplitSection = ({
  heading,
  title,
  body,
  imageSrc,
  imageAlt,

  imageSide = "right",
  fullBleedImage = true,
  desktopMinHeight = 650,

  imageClassName = "",
  imageHeightClassName = "lg:h-[650px]",
  contentMaxWidthClassName = "max-w-[520px]",
  tintClassName = "",
  imageFit = "cover",
  imagePaddingClassName = "",

  imageRadius,
  imageRadiusClassName,

  watermarkSrc,
  watermarkSide = "auto",
  watermarkTopClassName = "top-0",
  watermarkSizeClassName = "h-[780px] w-[780px]",
  watermarkClassName = "object-contain",
}: SplitSectionProps) => {
  const isRightImage = imageSide === "right";
  const fitClass = imageFit === "contain" ? "object-contain" : "object-cover";
  const padClass =
    imageFit === "contain" ? imagePaddingClassName ?? "p-12 lg:p-16" : "";

  const defaultRadius: ImageRadius = isRightImage ? "bl" : "br";
  const radiusClass =
    imageRadiusClassName ?? radiusMap[imageRadius ?? defaultRadius];

  const wmSideResolved: Exclude<WatermarkSide, "auto"> =
    watermarkSide === "auto"
      ? isRightImage
        ? "left"
        : "right"
      : watermarkSide;

  const wmEdgeClass =
    wmSideResolved === "left" ? "left-[-140px]" : "right-[-80px]";

  return (
    <section className="">
      <h2 className="text-center text-black text-3xl lg:text-5xl font-bold uppercase p-15">
        {heading}
      </h2>
      <div className="relative py-0 md:py-10 overflow-x-clip">
        {/* Watermark (full value, sticky to viewport edge) */}
        {watermarkSrc && (
          <div
            className={[
              "pointer-events-none absolute z-0",
              watermarkTopClassName,
              wmEdgeClass,
              watermarkSizeClassName,
            ].join(" ")}
          >
            <Image
              src={watermarkSrc}
              alt=""
              fill
              className={watermarkClassName}
              sizes="780px"
              priority={false}
            />
          </div>
        )}
        <div className="page-container relative z-10">
          <div
            className="relative mt-10 lg:flex lg:items-center"
            style={{ minHeight: `${desktopMinHeight}px` }}
          >
            {/* CONTENT */}
            <div
              className={[
                contentMaxWidthClassName,
                isRightImage ? "" : "lg:ml-auto",
              ].join(" ")}
            >
              {title && (
                <h3 className="text-black font-extrabold text-2xl md:text-3xl">
                  {title}
                </h3>
              )}
              <div className={title ? "mt-6" : ""}>{body}</div>
            </div>

            {/* IMAGE */}
            <div
              className={[
                "relative mt-10 h-[260px] sm:h-80 overflow-hidden",
                radiusClass,
                "lg:mt-0 lg:absolute lg:top-0",
                imageHeightClassName,
                fullBleedImage ? "lg:w-[min(1100px,62vw)]" : "lg:w-[560px]",
                fullBleedImage
                  ? isRightImage
                    ? "lg:right-[calc((100vw-100%)/-2)]"
                    : "lg:left-[calc((100vw-100%)/-2)]"
                  : isRightImage
                  ? "lg:right-0"
                  : "lg:left-0",
                imageClassName,
              ].join(" ")}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className={`${fitClass} ${padClass}`}
                sizes="(max-width: 1024px) 100vw, 1100px"
                quality={90}
              />
              {tintClassName && (
                <div
                  className={["absolute inset-0", tintClassName].join(" ")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
