import BackgroundSVG, { colorThemes } from "./BackgroundSVG";

interface BackgroundProps {
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
  theme?: keyof typeof colorThemes;
}

const Background = ({
  primaryColor,
  secondaryColor,
  className = "absolute bottom-0 -left-2 w-1/2 z-10",
  theme = "default",
}: BackgroundProps) => {
  // Determine colors to use
  const colors = (() => {
    // If both custom colors provided, use them
    if (primaryColor && secondaryColor) {
      return { primaryColor, secondaryColor };
    }

    // If only one custom color provided, warn and use theme
    if (primaryColor || secondaryColor) {
      console.warn(
        "Both primaryColor and secondaryColor must be provided. Falling back to theme."
      );
    }

    // Use theme colors (theme is guaranteed to be a valid key)
    return colorThemes[theme];
  })();

  return (
    <div className={className}>
      <BackgroundSVG {...colors} className="w-1/2 h-1/2" />
    </div>
  );
};

export default Background;
