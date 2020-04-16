import getShareImage from "@jlengstorf/get-share-image";

export const socialImage = ({ title, type, date }) => {
  const titleFontSize = parseInt(101 - title.length * 0.8, 10);
  return getShareImage({
    title: title,
    tagline: date,
    cloudName: "duko2tssr",
    imagePublicID: type === "tech" ? "episode-template_sriwmj" : "mss_csl4ly",
    titleExtraConfig: "_bold", // optional - set title font weight to bold
    //titleExtraConfig: "_line_spacing_-10",
    textColor: "FFFFFF",
    textLeftOffset: 94,
    textAreaWidth: 540,
    titleBottomOffset: 265,
    taglineTopOffset: 430,
    titleColor: "FFFFFF",
    taglineColor: "FFFFFF",
    titleFontSize,
    taglineFontSize: 30,
    titleFont: "lato"
  });
};
