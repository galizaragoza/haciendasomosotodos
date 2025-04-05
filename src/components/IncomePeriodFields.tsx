import React from "react";
import { Input } from "@/components/ui/input";

export default function IncomePeriodFields({ index, periodo, onChange }) {
  return (
    <div className="space-y-2 border p-3 rounded-lg shadow-sm">
      <div>
        <label className="block text-md font-medium text-gray-900">
          Ingreso mensual medio periodo {index + 1}
        </label>
        <Input
          type="number"
          placeholder="Salario en € / mes"
          value={periodo.ingreso}
          onChange={(e) => onChange(index, "ingreso", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <label className="block text-md font-medium text-gray-900">
          Gasto mensual medio periodo {index + 1}
        </label>
        <Input
          type="number"
          placeholder="Gasto en € / mes"
          value={periodo.gasto}
          onChange={(e) => onChange(index, "gasto", e.target.value)}
          className="mt-1"
        />
      </div>
      <div>
        <label className="block text-md font-medium text-gray-900">
          Duración del periodo en meses
        </label>
        <Input
          type="number"
          placeholder="Ej. 12"
          value={periodo.duracion}
          onChange={(e) => onChange(index, "duracion", e.target.value)}
          className="mt-1"
        />
      </div>
    </div>
  );
}
