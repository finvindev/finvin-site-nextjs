const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function cldImage(publicId, transform = "f_auto,q_auto", version) {
  const versionSegment = version ? `v${version}/` : "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${versionSegment}${publicId}`;
}

export function cldVideo(publicId, transform = "q_auto") {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transform}/${publicId}`;
}
