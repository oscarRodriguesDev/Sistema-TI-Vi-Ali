'use client';
import React, { useState, useEffect } from 'react';

export function CookiesConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o localStorage está disponível
    if (typeof window !== 'undefined') {
      const consentGiven = localStorage.getItem('cookiesConsent');
      if (consentGiven) {
        setIsVisible(false);
      }else{
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      // Salva a aceitação do usuário no localStorage
      localStorage.setItem('cookiesConsent', 'true');
    }
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            Usamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{' '}
            <a href="/privacy-policy" className="underline">
              política de privacidade
            </a>.
          </p>
          <button
            onClick={handleAccept}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Aceitar
          </button>
        </div>
      </div>
    )
  );
}
