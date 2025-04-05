export type Comunidad =
  | "estatal"
  | "madrid"
  | "catalunya"
  | "andalucia"
  | "valencia";

const tramosIRPFComunidad: Record<Comunidad, { hasta: number; tipo: number }[]> = {
  estatal: [
    { hasta: 12450, tipo: 0.095 },
    { hasta: 20200, tipo: 0.12 },
    { hasta: 35200, tipo: 0.15 },
    { hasta: 60000, tipo: 0.185 },
    { hasta: 300000, tipo: 0.225 },
    { hasta: Infinity, tipo: 0.235 },
  ],
  madrid: [
    { hasta: 12450, tipo: 0.091 },
    { hasta: 20200, tipo: 0.111 },
    { hasta: 35200, tipo: 0.133 },
    { hasta: 60000, tipo: 0.179 },
    { hasta: 300000, tipo: 0.21 },
    { hasta: Infinity, tipo: 0.225 },
  ],
  catalunya: [
    { hasta: 12450, tipo: 0.105 },
    { hasta: 20200, tipo: 0.12 },
    { hasta: 35200, tipo: 0.18 },
    { hasta: 60000, tipo: 0.21 },
    { hasta: 300000, tipo: 0.23 },
    { hasta: Infinity, tipo: 0.245 },
  ],
  andalucia: [
    { hasta: 12450, tipo: 0.095 },
    { hasta: 20200, tipo: 0.12 },
    { hasta: 35200, tipo: 0.15 },
    { hasta: 60000, tipo: 0.185 },
    { hasta: 300000, tipo: 0.22 },
    { hasta: Infinity, tipo: 0.235 },
  ],
  valencia: [
    { hasta: 12450, tipo: 0.1 },
    { hasta: 20200, tipo: 0.125 },
    { hasta: 35200, tipo: 0.17 },
    { hasta: 60000, tipo: 0.2 },
    { hasta: 300000, tipo: 0.235 },
    { hasta: Infinity, tipo: 0.25 },
  ],
};

export const calcularIRPF = (base: number, comunidad: Comunidad): number => {
  const tramos = tramosIRPFComunidad[comunidad];
  let restante = base;
  let anteriorHasta = 0;
  let irpf = 0;

  for (const tramo of tramos) {
    const baseTramo = Math.min(restante, tramo.hasta - anteriorHasta);
    if (baseTramo <= 0) break;
    irpf += baseTramo * tramo.tipo;
    restante -= baseTramo;
    anteriorHasta = tramo.hasta;
  }

  return irpf;
};

export const calcularSeguridadSocial = (ingresos: number) => ingresos * 0.0635;

export const calcularIVAenGastos = (gastos: number) => gastos * 0.15;

export const deduccionPorTipoContrato = (tipoContrato: "indefinido" | "temporal"): number => {
  return tipoContrato === "temporal" ? 2000 : 0;
};

export const calcularCuotaAutonomo = (rendimientoMensual: number): number => {
  const tramos = [
    { hasta: 670, cuota: 230 },
    { hasta: 900, cuota: 250 },
    { hasta: 1166.7, cuota: 275 },
    { hasta: 1300, cuota: 291 },
    { hasta: 1500, cuota: 294 },
    { hasta: 1700, cuota: 294 },
    { hasta: 1850, cuota: 310 },
    { hasta: 2030, cuota: 315 },
    { hasta: 2330, cuota: 320 },
    { hasta: 2760, cuota: 330 },
    { hasta: 3190, cuota: 350 },
    { hasta: 3620, cuota: 370 },
    { hasta: 4050, cuota: 390 },
    { hasta: 6000, cuota: 420 },
    { hasta: Infinity, cuota: 530 },
  ];

  for (const tramo of tramos) {
    if (rendimientoMensual <= tramo.hasta) {
      return tramo.cuota;
    }
  }

  return 530;
};
