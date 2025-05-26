/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { esES } from '@mui/x-date-pickers/locales';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

interface Feriado {
  dia: string;
  motivo: string;
  tipo: string;
}

export default function CalendarioFeriados() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [feriados, setFeriados] = useState<Feriado[]>([]);
  const [feriadoHoy, setFeriadoHoy] = useState<Feriado | null>(null);

  useEffect(() => {
    fetch('https://api.argentinadatos.com/v1/feriados/2025')
      .then((res) => res.json())
      .then((data) => {
        const feriadosAdaptados: Feriado[] = data.map((f: any) => ({
          dia: f.fecha,
          motivo: f.nombre,
          tipo: f.tipo,
        }));
        setFeriados(feriadosAdaptados);

        const hoy = dayjs().format('YYYY-MM-DD');
        const feriadoActual = feriadosAdaptados.find(f => f.dia === hoy);
        if (feriadoActual) {
          setFeriadoHoy(feriadoActual);
        }
      })
      .catch((err) => console.error('Error al obtener feriados:', err));
  }, []);

  const feriadoDelDia = selectedDate
    ? feriados.find(f => f.dia === selectedDate.format('YYYY-MM-DD'))
    : null;

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="es"
      localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <div className="p-6">
        {feriadoHoy && (
          <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-black rounded-md shadow">
            <h2 className="text-lg font-bold">¡Hoy es un día patrio!</h2>
            <p>{dayjs().format('D [de] MMMM')}: {feriadoHoy.motivo}</p>
          </div>
        )}

        <div className="bg-cyan-100 rounded-xl shadow-2xl p-4">
          <DateCalendar
            displayWeekNumber
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            slotProps={{
              calendarHeader: {
                className: "text-black font-bold",
              },
              leftArrowIcon: {
                className: "text-black",
              },
              rightArrowIcon: {
                className: "text-black",
              },
              day: {
                className: "text-black font-bold",
              },
            }}
          />
        </div>

        {feriadoDelDia && (
          <div className="mt-6 p-4 border border-gray-300 rounded-md bg-white shadow">
            <h2 className="text-black font-bold text-lg">
              {selectedDate?.format('D [de] MMMM')}
            </h2>
            <p className="text-black font-bold">Motivo: {feriadoDelDia.motivo}</p>
            <p className="text-gray-700 italic">Tipo: {feriadoDelDia.tipo}</p>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
}
