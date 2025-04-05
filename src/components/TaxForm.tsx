"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import IncomePeriodFields from "@/components/IncomePeriodFields";
import ExtraFields from "@/components/ExtraFields";
import ResultsBlock from "@/components/ResultsBlock";
import {
  calcularIRPF,
  calcularSeguridadSocial,
  calcularIVAenGastos,
  deduccionPorTipoContrato,
  calcularCuotaAutonomo,
} from "@/utils/taxCalculator";

type Resultados = {
  irpf: number;
  seguridadSocial: number;
  iva: number;
  multas: number;
  totalPagado: number;
  ivaVivienda: number;
  itpVivienda: number;
  impuestoHerencia: number;
  impuestoLoteria: number;
  aportacionEmpresa: number;
  costeTotalEmpresa: number;
};

export default function TaxForm() {
  const [incomePeriods, setIncomePeriods] = useState([{ ingreso: "", gasto: "", duracion: "12" }]);
  const [tipoContrato, setTipoContrato] = useState("indefinido");
  const [tipo, setTipo] = useState("trabajador");
  const [multas, setMultas] = useState("");
  const [viviendaNueva, setViviendaNueva] = useState("");
  const [viviendaUsada, setViviendaUsada] = useState("");
  const [herencia, setHerencia] = useState("");
  const [loteria, setLoteria] = useState("");
  const [retencionIRPF, setRetencionIRPF] = useState("");
  const [numeroHijos, setNumeroHijos] = useState("0");
  const [comunidad, setComunidad] = useState("estatal");
  const [deducciones, setDeducciones] = useState("");
  const [resultados, setResultados] = useState<Resultados | null>(null);

  const handleAddPeriod = () => {
    setIncomePeriods([...incomePeriods, { ingreso: "", gasto: "", duracion: "12" }]);
  };

  const handlePeriodChange = (
    index: number,
    field: "ingreso" | "gasto" | "duracion",
    value: string
  ) => {
    const updated = [...incomePeriods];
    updated[index][field] = value;
    setIncomePeriods(updated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ingresosTotales = incomePeriods.reduce((sum, p) => sum + parseFloat(p.ingreso || "0") * parseFloat(p.duracion || "0"), 0);
    const gastosTotales = incomePeriods.reduce((sum, p) => sum + parseFloat(p.gasto || "0") * parseFloat(p.duracion || "0"), 0);
    const totalMeses = incomePeriods.reduce((sum, p) => sum + parseFloat(p.duracion || "0"), 0);

    const multasNumericas = parseFloat(multas || "0");
    const ivaVivienda = parseFloat(viviendaNueva || "0") * 0.10;
    const itpVivienda = parseFloat(viviendaUsada || "0") * 0.07;
    const impuestoHerencia = parseFloat(herencia || "0") * 0.07;
    const baseLoteriaTributable = Math.max(0, parseFloat(loteria || "0") - 40000);
    const impuestoLoteria = baseLoteriaTributable * 0.20;
    const extraordinarios = ivaVivienda + itpVivienda + impuestoHerencia + impuestoLoteria;

    let irpf = 0;
    let ss = 0;
    let iva = 0;
    let totalPagado = 0;
    let aportacionEmpresa = 0;
    let costeTotalEmpresa = 0;

    if (tipo === "trabajador") {
      const hijos = parseInt(numeroHijos || "0", 10);
      const deduccionPorHijos = hijos * 2400;
      const otrasDeducciones = parseFloat(deducciones || "0");
      const deduccionContrato = deduccionPorTipoContrato(tipoContrato);
      const baseReducida = Math.max(0, ingresosTotales - deduccionPorHijos - otrasDeducciones - deduccionContrato);
      const irpfEstimado = calcularIRPF(baseReducida, comunidad);
      irpf = retencionIRPF ? parseFloat(retencionIRPF) : irpfEstimado;
      ss = calcularSeguridadSocial(ingresosTotales);
      iva = calcularIVAenGastos(gastosTotales);

      const porcentajeEmpresa = tipoContrato === "indefinido" ? 0.28 : 0.30;
      aportacionEmpresa = ingresosTotales * porcentajeEmpresa;
      costeTotalEmpresa = ingresosTotales + aportacionEmpresa;

      totalPagado = irpf + ss + iva + multasNumericas + extraordinarios;
    } else if (tipo === "autonomo") {
      const beneficioNeto = ingresosTotales - gastosTotales;
      const rendimientoMensual = beneficioNeto / totalMeses;

      irpf = calcularIRPF(beneficioNeto, comunidad);
      const cuotaMensual = calcularCuotaAutonomo(rendimientoMensual);
      ss = cuotaMensual * totalMeses;

      const ivaRepercutido = ingresosTotales * 0.21;
      const ivaSoportado = gastosTotales * 0.21;
      iva = ivaRepercutido - ivaSoportado;

      totalPagado = irpf + ss + iva + multasNumericas + extraordinarios;
      aportacionEmpresa = 0;
      costeTotalEmpresa = 0;
    }

    setResultados({
      irpf,
      seguridadSocial: ss,
      iva,
      multas: multasNumericas,
      totalPagado,
      ivaVivienda,
      itpVivienda,
      impuestoHerencia,
      impuestoLoteria,
      aportacionEmpresa,
      costeTotalEmpresa,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 w-full max-w-[60%]">
      <div>
        <label className="block text-lg font-medium text-black">Tipo de trabajador</label>
        <Select value={tipo} onValueChange={setTipo}>
          <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="autonomo">Autónomo</SelectItem>
            <SelectItem value="trabajador">Trabajador por cuenta ajena</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {incomePeriods.map((periodo, index) => (
        <IncomePeriodFields key={index} index={index} periodo={periodo} onChange={handlePeriodChange} />
      ))}

      <Button type="button" variant="outline" onClick={handleAddPeriod}>
        Añadir otro periodo
      </Button>

      <ExtraFields {...{
        multas, setMultas,
        numeroHijos, setNumeroHijos,
        comunidad, setComunidad,
        retencionIRPF, setRetencionIRPF,
        deducciones, setDeducciones,
        viviendaNueva, setViviendaNueva,
        viviendaUsada, setViviendaUsada,
        herencia, setHerencia,
        loteria, setLoteria,
        tipoContrato, setTipoContrato
      }} />

      <div className="pt-4">
        <Button type="submit" className="w-full">Calcular</Button>
      </div>

      {resultados && <ResultsBlock resultados={resultados} tipo={tipo} />}
    </form>
  );
}
