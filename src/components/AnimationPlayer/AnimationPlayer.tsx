import React, { FC, useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  width?: number;
  height?: number;
  loop?: boolean;
  animationData: any; // Cambiamos animationData de ser una importación a ser una propiedad del componente
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  width = 200,
  height = 200,
  loop = false,
  animationData, // Ahora animationData es una propiedad del componente
}) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainerRef.current) {
      const container = animationContainerRef.current;
      animationInstanceRef.current = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop,
        autoplay: true,
        animationData, // Utilizamos la propiedad animationData en lugar de la importación
      });
    }

    return () => {
      if (animationInstanceRef.current) {
        animationInstanceRef.current.destroy();
      }
    };
  }, [loop, animationData]); // Asegúrate de incluir animationData como una dependencia

  return (
    <div
      ref={animationContainerRef}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default LottieAnimation;
