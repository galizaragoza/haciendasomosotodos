'use client'

import TaxForm from "@/components/TaxForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-opacity-40 text-black font-overpass">
      <main className="flex items-center justify-center flex-col">
        <h1 className="text-4xl max-w-[50%]">
          Bienvenido a{" "}
          <span className="italic font-bold text-5xl text-gradient-to-r from-red-500 via-yellow-500 to-red-500">Hacienda somos todos</span>
        </h1>
        <h2 className="text-3xl max-w-[55%] my-2 text-center">Cortesía de <Link href="https://linktr.ee/galizaragozadev" className="italic cursor-pointer hover:text-blue-700 hover:underline">
          galizaragozadev</Link>, clica en mi nombre si quieres apoyarme o saber más de mis proyectos</h2>
        <div className="text-xl max-w-[60%]">
          <p className="text-red-600">
            La página tiene un fin informativo, no se recopila ninguno de los datos del formulario!
          </p>
          <p>Introduce los campos del formulario que consideres oportuno (la mayoría son opcionales, contra más campos rellenes mayor precisión) 
            para obtener una aproximación con un margen entre el 90-99% de precisión
            de cuánto de lo que has generado y gastado a lo largo de tu vida fue a parar al Estado, y en que podría haberse utilizado dicha cantidad</p>
          <p className="text-sm text-gray-700">La página fue íntegramente desarrollada por mí y está alojada a través de una empresa gallega. Todas las donaciones son íntegras para mí y ayudarme 
            a seguir trabajando en mis proyectos (menos los impuestos).
          </p>
        </div>
        {/* Aquí se inserta el formulario */}
        <TaxForm />
      </main>
      <footer>
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}
