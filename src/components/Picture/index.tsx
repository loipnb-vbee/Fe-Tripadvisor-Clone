const sources = [
  { media: '(max-width: 400px)', widths: [400, 800], heights: [200, 300] },
  { media: '(max-width: 500px)', widths: [500, 1000], heights: [200, 400] },
  { media: '(max-width: 600px)', widths: [600, 1200], heights: [300, 500] },
  { media: '(max-width: 700px)', widths: [700, 1400], heights: [300, 600] },
  { media: '(max-width: 800px)', widths: [800, 1600], heights: [300, 600] },
  { media: '(max-width: 900px)', widths: [900, 1800], heights: [400, 700] },
  { media: '(max-width: 1000px)', widths: [1000, 2000], heights: [400, 800] },
  { media: '(max-width: 1023px)', widths: [1100, 2200], heights: [500, 900] },
];

const defaultImage = {
  widths: [1400, 2400],
  heights: [500, 1000],
};
type PictureProps = {
  src?: string;
};

const Picture: React.FC<PictureProps> = ({
  src = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg',
}) => (
  <picture>
    {sources.map((source, index) => (
      <source
        key={index}
        media={source.media}
        srcSet={`${src}?w=${source.widths[0]}&h=${source.heights[0]}&s=1 1x, ${src}?w=${source.widths[1]}&h=${source.heights[1]}&s=1 2x`}
      />
    ))}
    <img
      srcSet={`${src}?w=${defaultImage.widths[0]}&h=${defaultImage.heights[0]}&s=1 1x, ${src}?w=${defaultImage.widths[1]}&h=${defaultImage.heights[1]}&s=1 2x`}
      src={`${src}?w=${defaultImage.widths[0]}&h=${defaultImage.heights[0]}&s=1`}
      width={defaultImage.widths[0]}
      height={defaultImage.heights[0]}
      role="none"
      alt=""
    />
    {/* <img srcset="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=1400&amp;h=500&amp;s=1 1x,https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=2400&amp;h=1000&amp;s=1 2x" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=1400&amp;h=500&amp;s=1" width="1400" height="500" role="none" alt="" fetchpriority="high"></img> */}
  </picture>
);

export default Picture;
