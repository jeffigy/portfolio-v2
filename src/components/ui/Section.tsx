import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  title,
  id,
}) => {
  return (
    <section
      id={id}
      className={`justify-centerxl:mx-auto mx-5 flex flex-col items-center ${className}`}
    >
      {title && (
        <h3 className="mb-20 text-lg font-bold text-primary md:text-xl lg:text-3xl">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};

export default Section;
