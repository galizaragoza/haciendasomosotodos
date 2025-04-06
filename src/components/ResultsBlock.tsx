import React from "react";
import { FaRoad } from "react-icons/fa";
import { FaPersonMilitaryRifle, FaUserDoctor, FaSchool, FaBedPulse, FaUserTie, FaJetFighter } from "react-icons/fa6";
import { FaGlobeEurope, FaHandsHelping, FaPaintBrush } from "react-icons/fa";
import { GiAutoRepair, GiPoliceCar, GiAmbulance, GiTrafficLightsGreen } from "react-icons/gi";
import { MdFireTruck, MdOutlineVaccines, MdOutlinePhoneIphone, MdWeb, MdBallot  } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { TbMicroscope } from "react-icons/tb";
import { PiRocketLaunchFill } from "react-icons/pi";
import { HiSpeakerphone } from "react-icons/hi";
import { ImUserTie } from "react-icons/im";

export default function ResultsBlock({ resultados, tipo }) {
  return (
    <div className="mt-6 p-6 border rounded-xl bg-gray-50 space-y-4 text-sm shadow-md">
      <h3 className="text-xl font-semibold">Resultado de tu aportación fiscal</h3>

      <div className="space-y-1">
        <p className="text-lg"><strong>IRPF:</strong> {resultados.irpf.toFixed(2)} €</p>
        <p className="text-lg"><strong>Seguridad Social:</strong> {resultados.seguridadSocial.toFixed(2)} €</p>
        <p className="text-lg"><strong>IVA neto:</strong> {resultados.iva.toFixed(2)} €</p>
        <p className="text-lg"><strong>Multas:</strong> {resultados.multas.toFixed(2)} €</p>
      </div>

      <hr />
      <p className="text-base font-bold">Total aportado: <span className="underline"> {resultados.totalPagado.toFixed(2)}</span> €</p>
      <hr />
      <div className="mt-8 space-y-8 text-base text-gray-800">
        <div>
          <h4 className="text-xl font-semibold mb-4">Con tu aporte se podría haber hecho...</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaRoad size={50}/> {(resultados.totalPagado / 350000).toFixed(3)} km de carretera asfaltada</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><GiAutoRepair size={50}/> {(resultados.totalPagado / 100000).toFixed(3)} km de carretera reparada</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><GiPoliceCar size={50}/> {(resultados.totalPagado / 30000).toFixed(1)} sueldos anuales de policías</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><MdFireTruck size={50}/> {(resultados.totalPagado / 35000).toFixed(1)} sueldos anuales de bomberos</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaPersonMilitaryRifle size={50}/> {(resultados.totalPagado / 22000).toFixed(1)} sueldos anuales de militares</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaUserDoctor size={50}/> {(resultados.totalPagado / 50000).toFixed(1)} sueldos anuales de médicos</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaSchool size={50}/> {(resultados.totalPagado / 6000).toFixed(1)} años de escolarización pública</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><MdOutlineVaccines size={50}/>{(resultados.totalPagado / 25).toFixed(1)} vacunas</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><IoMdSchool size={50}/> {(resultados.totalPagado / 2500).toFixed(1)} becas Erasmus</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><TbMicroscope size={50}/> {(resultados.totalPagado / 45000).toFixed(1)} becas doctorales FPI</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaBedPulse size={50}/> {(resultados.totalPagado / 70000).toFixed(1)} camas UCI totalmente equipadas</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><GiAmbulance size={50}/> {(resultados.totalPagado / 90000).toFixed(1)} ambulancias medicalizadas</div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mt-6 mb-4"> Y también...</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><MdOutlinePhoneIphone size={50}/> {(resultados.totalPagado / 1300).toFixed(0)} iPhones 16</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaUserTie size={50}/> {(resultados.totalPagado / 82000).toFixed(2)} sueldos de ministros</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><ImUserTie size={50}/> {(resultados.totalPagado / 90000).toFixed(2)} sueldos del presidente del Gobierno</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaGlobeEurope size={50}/> {(resultados.totalPagado / 108000).toFixed(2)} sueldos de eurodiputados</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaHandsHelping size={50}/> {(resultados.totalPagado / 55000).toFixed(2)} sueldos de asesores políticos</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaJetFighter size={50}/> {(resultados.totalPagado / 25000).toFixed(2)} vuelos del Falcon</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><FaPaintBrush size={50}/> {(resultados.totalPagado / 20000).toFixed(1)} obras de arte para edificios oficiales</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><MdWeb size={50}/> {(resultados.totalPagado / 150000).toFixed(2)} webs institucionales</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><PiRocketLaunchFill size={50}/> {(resultados.totalPagado / 5000).toFixed(0)} espectáculos de fuegos artificiales</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><MdBallot size={50}/> {(resultados.totalPagado / 1.5).toFixed(0)} folletos electorales impresos</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><GiTrafficLightsGreen size={50}/> {(resultados.totalPagado / 35000).toFixed(2)} esculturas abstractas en rotondas</div>
            <div className="border rounded-xl p-4 shadow-lg flex flex-col gap-4 items-center"><HiSpeakerphone size={50}/> {(resultados.totalPagado / 8).toFixed(0)} packs de merchandising electoral</div>
          </div>
        </div>

      </div>


      <div className="space-y-1">
        {resultados.ivaVivienda > 0 && <p>🏠 IVA por vivienda nueva: {resultados.ivaVivienda.toFixed(2)} €</p>}
        {resultados.itpVivienda > 0 && <p>🏚️ ITP vivienda usada: {resultados.itpVivienda.toFixed(2)} €</p>}
        {resultados.impuestoHerencia > 0 && <p>🏛️ Impuesto sucesiones: {resultados.impuestoHerencia.toFixed(2)} €</p>}
        {resultados.impuestoLoteria > 0 && <p>🎰 Impuesto lotería: {resultados.impuestoLoteria.toFixed(2)} €</p>}
      </div>

      {tipo === "trabajador" && (
        <div className="mt-4 text-sm text-gray-800 border-t pt-4 space-y-1">
          <p><strong>🏢 Coste total para la empresa por ti:</strong> {resultados.costeTotalEmpresa.toFixed(2)} €</p>
          <p><strong>📈 Aportación empresarial estimada:</strong> {resultados.aportacionEmpresa.toFixed(2)} €</p>
          <p className="text-gray-600 text-xs">Incluye cotizaciones empresariales (~30% del salario bruto).</p>
        </div>
      )}
    </div>
  );
}
