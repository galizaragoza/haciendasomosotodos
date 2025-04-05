import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ExtraFields(props) {
  return (
    <>
      <div>
        <label className="block text-md font-medium text-gray-900">Tipo de contrato</label>
        <Select value={props.tipoContrato} onValueChange={props.setTipoContrato}>
          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="indefinido">Indefinido</SelectItem>
            <SelectItem value="temporal">Temporal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">Número de hijos a cargo</label>
        <Select value={props.numeroHijos} onValueChange={props.setNumeroHijos}>
          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="0">0</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3 o más</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">Comunidad Autónoma</label>
        <Select value={props.comunidad} onValueChange={props.setComunidad}>
          <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="estatal">Estatal (media)</SelectItem>
            <SelectItem value="madrid">Madrid</SelectItem>
            <SelectItem value="catalunya">Cataluña</SelectItem>
            <SelectItem value="andalucia">Andalucía</SelectItem>
            <SelectItem value="valencia">C. Valenciana</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">IRPF retenido (opcional)</label>
        <Input type="number" value={props.retencionIRPF} onChange={(e) => props.setRetencionIRPF(e.target.value)} className="mt-1" />
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">Otras deducciones aplicadas (opcional)</label>
        <Input type="number" value={props.deducciones} onChange={(e) => props.setDeducciones(e.target.value)} className="mt-1" />
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">Multas(opcional)</label>
        <Input type="number" value={props.multas} onChange={(e) => props.setMultas(e.target.value)} className="mt-1" />
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">Compra de vivienda nueva (con IVA)(opcional)</label>
        <Input type="number" value={props.viviendaNueva} onChange={(e) => props.setViviendaNueva(e.target.value)} className="mt-1" />
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">Compra de vivienda usada (con ITP)(opcional)</label>
        <Input type="number" value={props.viviendaUsada} onChange={(e) => props.setViviendaUsada(e.target.value)} className="mt-1" />
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">Herencia recibida(opcional)</label>
        <Input type="number" value={props.herencia} onChange={(e) => props.setHerencia(e.target.value)} className="mt-1" />
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900">Premio de lotería(opcional)</label>
        <Input type="number" value={props.loteria} onChange={(e) => props.setLoteria(e.target.value)} className="mt-1" />
      </div>
    </>
  );
}
