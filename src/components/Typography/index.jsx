import React from 'react';

const variants = {
  xlTitle1: 'font-[700] text-largeTitle md:text-xlTitle2 lg:text-xlTitle1',
  xlTitle2: 'font-[700] text-largeTitle md:text-xlTitle2',
  largeTitle: 'font-[700] text-title3 md:text-title1 xl:text-largeTitle',
  title1: 'font-[700] text-title3 md:text-title1',
  title2: 'font-[700] text-title3 md:text-title2',
  title3: 'font-[700] text-headline md:text-title3',
  headline: 'font-[700] text-[16px] leading-[24px]',
  body: 'font-[500] font-body',
  bodyMedium: 'font-[400] text-bodySmall md:text-bodyMedium',
  bodySmall: 'font-[400] text-bodySmall',
  callout: 'font-[500] text-callout',
  subHeadline: 'font-[400] text-subHeadline',
  footnote: 'font-[400] text-footnote',
  caption: 'font-[400] text-caption',
};

const colors = {
  xlTitle1: 'text-tertiary',
  xlTitle2: 'text-tertiary',
  largeTitle: 'text-tertiary',
  title1: 'text-tertiary',
  title2: 'text-tertiary',
  title3: 'text-tertiary',
  headline: 'text-black',
  body: 'text-black',
  bodyMedium: 'text-black',
  bodySmall: 'text-black',
  callout: 'text-black',
  subHeadline: 'text-black',
  footnote: 'text-black',
  caption: 'text-black',
};

const tags = {
  xlTitle1: 'h2',
  xlTitle2: 'h3',
  largeTitle: 'p',
  title1: 'p',
  title2: 'p',
  title3: 'p',
  headline: 'p',
  body: 'p',
  bodyMedium: 'p',
  bodySmall: 'p',
  callout: 'p',
  subHeadline: 'p',
  footnote: 'p',
  caption: 'p',
};

const CustomTag = ({ heading, variant, children, ...props }) => {
  const validHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
  const isValidHeading = validHeadings.includes(heading);
  const h = isValidHeading ? heading : tags[variant] || tags.body;
  return React.createElement(h, props, children);
};

const Typography = ({
  value,
  variant = 'body',
  color,
  className = '',
  heading,
}) => (
  <CustomTag
    className={`${color || colors[variant]} ${variants[variant]} ${className}`}
    variant={variant}
    heading={heading}
  >
    {value}
  </CustomTag>
);

export default Typography;
