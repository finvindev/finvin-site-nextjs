export default function ImagePlaceholder({ label = "Image", className = "", style }) {
  return (
    <div className={`asset-placeholder ${className}`} style={style}>
      <span className="ph-label">{label}</span>
    </div>
  );
}
