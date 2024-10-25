import { useEffect, useState } from "react";
import styled from "styled-components";
import { PulseLoader } from "react-spinners";

const MaskedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9998;
`;

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

interface LoadingSpinnerProps {
  isLoading: boolean;
  size?: number;
  color?: string;
  minLoadTime?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  isLoading,
  size = 20,
  color = "var(--blue)",
  minLoadTime = 500,
}) => {
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
