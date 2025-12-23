type SectionHeadingProps = {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({
  children,
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  return (
    <h2
      className={[
        "uppercase text-black font-extrabold tracking-[0.12em]",
        "text-xl md:text-2xl lg:text-4xl",
        align === "left" ? "text-left" : "text-center",
        className,
      ].join(" ")}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
