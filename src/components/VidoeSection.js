const VidoeSection = ({ videoKey }) => {
  return (
    <div>
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};
export default VidoeSection;
