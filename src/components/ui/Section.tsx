import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  title,
}) => {
  return (
    <section
      className={`mx-5 flex flex-col items-center justify-center space-y-5 xl:mx-auto ${className}`}
    >
      <h3 className="text-lg font-bold text-primary md:text-xl lg:text-3xl">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default Section;
