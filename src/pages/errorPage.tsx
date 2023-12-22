import React from 'react';
import AnimationPlayer from '@/components/AnimationPlayer/AnimationPlayer';
import errorAnimation from '@/utils/animations/errorPage.json';

const ErrorPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // 100% de la altura de la ventana
    backgroundColor: '#C7FDD0', // Color de fondo
  };

  return (
    <div style={containerStyle}>
      <AnimationPlayer loop={true} animationData={errorAnimation} width={600} height={600} />
    </div>
  );
};

export default ErrorPage;
