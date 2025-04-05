import React from "react";

export default function ResultsBlock({ resultados, tipo }) {
  return (
    <div className="mt-6 p-6 border rounded-xl bg-gray-50 space-y-4 text-sm shadow-md">
      <h3 className="text-lg font-semibold">Resultado de tu aportación fiscal</h3>

      <div className="space-y-1">
        <p><strong>IRPF:</strong> {resultados.irpf.toFixed(2)} €</p>
        <p><strong>Seguridad Social:</strong> {resultados.seguridadSocial.toFixed(2)} €</p>
        <p><strong>IVA neto:</strong> {resultados.iva.toFixed(2)} €</p>
        <p><strong>Multas:</strong> {resultados.multas.toFixed(2)} €</p>
      </div>

      <hr />
      <p className="text-base font-bold">💰 Total aportado: {resultados.totalPagado.toFixed(2)} €</p>
      <hr />
      <div className="mt-8 space-y-6 text-md text-gray-700">
        <div>
          <h4 className="font-semibold text-base mb-1">💡 Con tu aporte se podría haber hecho...</h4>
          <ul className="list-disc list-inside space-y-1 text-md">
            <li>🛣️ {(resultados.totalPagado / 350000).toFixed(3)} km de carretera asfaltada</li>
            <li>🛠️ {(resultados.totalPagado / 100000).toFixed(2)} km de carretera reparada</li>
            <li>🚓 {(resultados.totalPagado / 30000).toFixed(2)} sueldos anuales de policías</li>
            <li>👨‍🚒 {(resultados.totalPagado / 35000).toFixed(2)} sueldos anuales de bomberos</li>
            <li>🪖 {(resultados.totalPagado / 22000).toFixed(2)} sueldos anuales de militares</li>
            <li>🩺 {(resultados.totalPagado / 50000).toFixed(2)} sueldos anuales de médicos</li>
            <li>🏫 {(resultados.totalPagado / 6000).toFixed(2)} años de escolarización pública</li>
            <li>💉 {(resultados.totalPagado / 25).toFixed(0)} vacunas</li>
            <li>🎓 {(resultados.totalPagado / 2500).toFixed(0)} becas Erasmus</li>
            <li>🔬 {(resultados.totalPagado / 45000).toFixed(2)} becas doctorales FPI</li>
            <li>🛏️ {(resultados.totalPagado / 70000).toFixed(2)} camas UCI totalmente equipadas</li>
            <li>🚑 {(resultados.totalPagado / 90000).toFixed(2)} ambulancias medicalizadas</li>
            <li>🧠 {(resultados.totalPagado / 5000).toFixed(2)} talleres de salud mental en institutos</li>
            <li>🍼 {(resultados.totalPagado / 3500).toFixed(2)} plazas de guardería pública</li>
            <li>🌳 {(resultados.totalPagado / 20000).toFixed(2)} proyectos de reforestación local</li>

          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-base mt-4 mb-1">🧢 Y también...</h4>
          <ul className="list-disc list-inside space-y-1 text-md">
            <li>📱 {(resultados.totalPagado / 1300).toFixed(0)} iPhones 16</li>
            <li>👔 {(resultados.totalPagado / 82000).toFixed(2)} sueldos de ministros</li>
            <li>👑 {(resultados.totalPagado / 90000).toFixed(2)} sueldos del presidente del Gobierno</li>
            <li>🇪🇺 {(resultados.totalPagado / 108000).toFixed(2)} sueldos de eurodiputados</li>
            <li>👥 {(resultados.totalPagado / 55000).toFixed(2)} sueldos de asesores políticos</li>
            <li>🛫 {(resultados.totalPagado / 25000).toFixed(2)} vuelos del Falcon</li>
            <li>🖼️ {(resultados.totalPagado / 20000).toFixed(1)} obras de arte para edificios oficiales</li>
            <li>🕸️ {(resultados.totalPagado / 150000).toFixed(2)} webs institucionales de dudoso funcionamiento</li>
            <li>🎆 {(resultados.totalPagado / 5000).toFixed(0)} espectáculos de fuegos artificiales</li>
            <li>💾 {(resultados.totalPagado / 15).toFixed(0)} USBs con logos institucionales</li>
            <li>🧾 {(resultados.totalPagado / 1.5).toFixed(0)} folletos electorales impresos</li>
            <li>🗿 {(resultados.totalPagado / 35000).toFixed(2)} esculturas abstractas en rotondas</li>
            <li>🧴 {(resultados.totalPagado / 2500).toFixed(0)} caterings institucionales de lujo</li>
            <li>🪑 {(resultados.totalPagado / 6000).toFixed(1)} sillas de diseño para despachos públicos</li>
            <li>📸 {(resultados.totalPagado / 1000).toFixed(1)} sesiones de fotos oficiales con estilismo</li>
            <li>📦 {(resultados.totalPagado / 8).toFixed(0)} packs de merchandising electoral</li>
            <li>🧘 {(resultados.totalPagado / 3000).toFixed(1)} cursos de coaching político</li>

          </ul>
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
