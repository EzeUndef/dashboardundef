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
}

export default function CalendarioFeriados() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [feriados, setFeriados] = useState<Feriado[]>([]);

  useEffect(() => {
    fetch('https://api.argentinadatos.com/v1/feriados/2025')
      .then((res) => res.json())
      .then((data: Feriado[]) => setFeriados(data))
      .catch((err) => console.error('Error al obtener feriados:', err));
  }, []);

  const feriadoDelDia = selectedDate
    ? feriados.find(f => f.dia === selectedDate.format('YYYY-MM-DD'))
    : null;

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <div className="p-6">
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
          <div className="mt-6 p-4 border border-gray-300 rounded-md">
            <h2 className="text-black font-bold text-lg">
              {selectedDate?.format('D [de] MMMM')}
            </h2>
            <p className="text-black font-bold">{feriadoDelDia.motivo}</p>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
}
