export default function ImagePlaceholder({ label = "Image", className = "" }) {
  return (
    <div className={`asset-placeholder ${className}`}>
      <span className="ph-label">{label}</span>
    </div>
  );
}
