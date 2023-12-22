import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirige automáticamente a la página '/home' después de que el componente se haya montado.
    router.push('/home');
  }); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente.

  return (
    <div>
      {/* Puedes agregar contenido adicional si es necesario */}
    </div>
  );
}
