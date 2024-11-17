const SectionWrapper = ({
  children,
  className = "",
  id,
  childrenClassName = "",
}) => (
  // py-10 px-4 lg:p-20 2xl:px-40
  <div id={id} className={`flex justify-center p-4 ${className}`}>
    <div className={`w-full h-fit max-w-[1136px] ${childrenClassName}`}>
      {children}
    </div>
  </div>
);

export default SectionWrapper;
