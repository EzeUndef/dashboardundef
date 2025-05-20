import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Typography, Box } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

// Lista de fechas patrias argentinas
const fechasPatrias: { [key: string]: string } = {
  '2025-03-24': 'Día Nacional de la Memoria por la Verdad y la Justicia',
  '2025-04-02': 'Día del Veterano y de los Caídos en la Guerra de Malvinas',
  '2025-05-01': 'Día del Trabajador (feriado internacional)',
  '2025-05-25': 'Día de la Revolución de Mayo',
  '2025-06-20': 'Paso a la Inmortalidad del General Manuel Belgrano',
  '2025-07-09': 'Día de la Independencia',
  '2025-08-17': 'Paso a la Inmortalidad del General José de San Martín',
  '2025-10-12': 'Día del Respeto a la Diversidad Cultural',
  '2025-11-20': 'Día de la Soberanía Nacional',
  '2025-12-08': 'Día de la Inmaculada Concepción de María',
  '2025-12-25': 'Navidad (feriado religioso)',
};

export default function AddWeekNumber() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const mensajeConmemorativo = selectedDate
    ? fechasPatrias[selectedDate.format('YYYY-MM-DD')]
    : null;

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        calendarWeekNumberHeaderText: '#',
        calendarWeekNumberText: (weekNumber: number) => `${weekNumber}.`,
      }}
    >
      <Box sx={{ p: 2 }}>
        <DateCalendar
          displayWeekNumber
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
        />

        {mensajeConmemorativo && (
          <Box sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h6" color="primary">
              {selectedDate?.format('D [de] MMMM')}
            </Typography>
            <Typography variant="body1">
              {mensajeConmemorativo}
            </Typography>
          </Box>
        )}
      </Box>
    </LocalizationProvider>
  );
}
