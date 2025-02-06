// pages/calendar.tsx
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  meetingWith: string;
  meetingTime: string;
  guestEmail: string;
}

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: FormData[] }>({}); // Agora será uma lista de reuniões
  const [editingDate, setEditingDate] = useState<Date | null>(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

  // Função para gerar os dias do mês como botões
  const generateDays = () => {
    const days = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      days.push(date);
    }

    return days;
  };

  // Função para lidar com a seleção do dia e edição dos dados
  const handleDayClick = (date: Date) => {
    if (editingDate && editingDate.getTime() === date.getTime()) {
      setEditingDate(null); // Se o mesmo dia for clicado, fecha o formulário
    } else {
      setEditingDate(date);
      const dateString = date.toISOString().split('T')[0];
      setSelectedDate(date);
      if (formData[dateString]) {
        const latestMeeting = formData[dateString][formData[dateString].length - 1]; // Pega o último agendamento
        setValue('meetingWith', latestMeeting.meetingWith);
        setValue('meetingTime', latestMeeting.meetingTime);
        setValue('guestEmail', latestMeeting.guestEmail);
      }
    }
  };

  // Função para salvar os dados editados
  const handleSaveData = (data: FormData) => {
    if (selectedDate) {
      const dateString = selectedDate.toISOString().split('T')[0]; // Formata a data como string (yyyy-mm-dd)
      setFormData((prev) => ({
        ...prev,
        [dateString]: prev[dateString] ? [...prev[dateString], data] : [data], // Adiciona a reunião ao array
      }));
    }
  };

  return (
    <div className="flex justify-end items-center h-screen">
      {/* Painel de marcação de reunião */}
      <div className="w-[70%] h-[95%] bg-white shadow-lg rounded-lg p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Marcar Reunião</h2>

        {/* Botões para os dias do mês */}
        <div className="grid grid-cols-7 gap-2 mb-52">
          {generateDays().map((date, index) => {
            const dateString = date.toISOString().split('T')[0];
            const hasMeeting = formData[dateString]; // Verifica se já há reuniões para este dia
            const isEditing = editingDate && editingDate.getTime() === date.getTime(); // Verifica se o dia está sendo editado
            const meetingInfo = hasMeeting
              ? `${formData[dateString].length} reunião(ões)`
              : 'Sem reunião';

            return (
              <div key={index} className="relative">
                <label className="bg-blue-600 w-10 text-white p-2 rounded-full mb-2 text-lg text-center">
                  {String(date.getDate()).padStart(2, '0')}
                </label>
                <button
                  onClick={() => handleDayClick(date)}
                  className={`w-full h-40 bg-gray-200 rounded-lg mb-5 mt-3 hover:bg-gray-300 transition relative ${isEditing ? 'bg-gray-400' : ''}`}
                >
                  <div className="flex flex-col items-center justify-center h-full text-sm text-center">
                    <p className="font-bold">{meetingInfo}</p>
                  </div>
                </button>

                {/* Exibe as reuniões do dia */}
                {isEditing && (
                  <div className="absolute top-0 left-0 w-[400px] h-[450px] bg-white rounded-lg shadow-lg p-4 flex flex-col z-10 overflow-auto">
                    <h3 className="text-lg font-semibold mb-2">Detalhes da Reunião</h3>
                    <form
                      onSubmit={handleSubmit((data) => {
                        handleSaveData(data);
                        setEditingDate(null); // Fecha o card após salvar
                      })}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="meetingWith" className="block text-sm font-medium text-gray-600">
                          Com quem?
                        </label>
                        <input
                          id="meetingWith"
                          type="text"
                          placeholder="Nome da pessoa"
                          className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                          {...register('meetingWith', { required: 'Nome é obrigatório' })}
                        />
                        {errors.meetingWith && <p className="text-red-500 text-xs">{errors.meetingWith.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="guestEmail" className="block text-sm font-medium text-gray-600">
                          E-mail do convidado
                        </label>
                        <input
                          id="guestEmail"
                          type="email"
                          placeholder="Email"
                          className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                          {...register('guestEmail', { required: 'E-mail é obrigatório' })}
                        />
                        {errors.guestEmail && <p className="text-red-500 text-xs">{errors.guestEmail.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="meetingTime" className="block text-sm font-medium text-gray-600">
                          Horário
                        </label>
                        <input
                          id="meetingTime"
                          type="time"
                          className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                          {...register('meetingTime', { required: 'Horário é obrigatório' })}
                        />
                        {errors.meetingTime && <p className="text-red-500 text-xs">{errors.meetingTime.message}</p>}
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        Salvar Reunião
                      </button>
                    </form>

                    {/* Exemplo de link gerado */}
                    <div className="mt-4 text-sm">
                      <p className="text-gray-600">Link gerado: <a href="#" className="text-blue-500">https://zoom.us/j/123456789</a></p>
                      <button
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-2"
                        onClick={() => alert('Iniciar reunião')}
                      >
                        Iniciar Reunião
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Formulário de marcação de reunião */}
        {selectedDate && !editingDate && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Marcar reunião para {selectedDate.toDateString()}</h3>
            <form
              onSubmit={handleSubmit((data) => {
                handleSaveData(data);
              })}
              className="space-y-4"
            >
              <div>
                <label htmlFor="meetingWith" className="block text-sm font-medium text-gray-600">
                  Com quem?
                </label>
                <input
                  id="meetingWith"
                  type="text"
                  placeholder="Nome da pessoa"
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                  {...register('meetingWith', { required: 'Nome é obrigatório' })}
                />
                {errors.meetingWith && <p className="text-red-500 text-xs">{errors.meetingWith.message}</p>}
              </div>

              <div>
                <label htmlFor="meetingTime" className="block text-sm font-medium text-gray-600">
                  Horário
                </label>
                <input
                  id="meetingTime"
                  type="time"
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                  {...register('meetingTime', { required: 'Horário é obrigatório' })}
                />
                {errors.meetingTime && <p className="text-red-500 text-xs">{errors.meetingTime.message}</p>}
              </div>

              <div>
                <label htmlFor="guestEmail" className="block text-sm font-medium text-gray-600">
                  E-mail do convidado
                </label>
                <input
                  id="guestEmail"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none"
                  {...register('guestEmail', { required: 'E-mail é obrigatório' })}
                />
                {errors.guestEmail && <p className="text-red-500 text-xs">{errors.guestEmail.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Salvar Reunião
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
