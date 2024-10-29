import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { MaskedBackground, SpinnerOverlay } from "./LoadingSpinner.styles";

type LoadingSpinnerProps = {
  isLoading: boolean;
  size?: number;
  color?: string;
  minLoadTime?: number;
}

const LoadingSpinner = ({
  isLoading,
  size = 20,
  color = "var(--blue)",
  minLoadTime = 500,
}: LoadingSpinnerProps) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime]);

  return isVisible ? (
    <MaskedBackground>
      <SpinnerOverlay>
        <PulseLoader size={size} color={color} />
      </SpinnerOverlay>
    </MaskedBackground>
  ) : null;
};

export default LoadingSpinner;
