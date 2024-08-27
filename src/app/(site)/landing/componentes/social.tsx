'use client'
import React from 'react';
import Image from 'next/image';
import Person1 from '../../../../../public/testimonials/person1.png'
import Person2 from '../../../../../public/testimonials/person2.jpg'
import Person3 from '../../../../../public/testimonials/person3.jpg'
import Partner1 from '../../../../../public/partners/partner1.png'
import Partner2 from '../../../../../public/partners/partner2.png'
import Partner3 from '../../../../../public/partners/partner3.png'
export function Social() {
    return (
        <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Título da Seção */}
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                    O Que Nossos Clientes Dizem
                </h1>

                {/* Depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Depoimento 1 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Image
                                src={Person1} // Substitua com o caminho real da imagem
                                alt="Cliente 1"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">Nome do Cliente 1</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Cargo do Cliente</p>
                            </div>
                        </div>
                        <p>
                            “A experiência foi fantástica! A equipe foi extremamente profissional e atendeu todas as minhas necessidades.”
                        </p>
                    </div>
                    {/* Depoimento 2 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Image
                                src={Person2} // Substitua com o caminho real da imagem
                                alt="Cliente 2"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">Nome do Cliente 2</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Cargo do Cliente</p>
                            </div>
                        </div>
                        <p>
                            “Recomendo fortemente! O serviço foi além das expectativas e a comunicação foi impecável.”
                        </p>
                    </div>
                    {/* Depoimento 3 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Image
                                src={Person3} // Substitua com o caminho real da imagem
                                alt="Cliente 3"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">Nome do Cliente 3</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Cargo do Cliente</p>
                            </div>
                        </div>
                        <p>
                            “Excelente serviço com atenção aos detalhes. A equipe foi muito dedicada e entregou um trabalho de alta qualidade.”
                        </p>
                    </div>
                </div>

                {/* Logotipos de Parceiros */}
                <div className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                        Nossos Parceiros
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Logotipo 1 */}
                        <Image
                                src={Partner1} // Substitua com o caminho real da imagem
                                alt="parceiro1"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                        {/* Logotipo 2 */}
                        <Image
                                src={Partner2} // Substitua com o caminho real da imagem
                                alt="poarceiro 2"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                        {/* Logotipo 3 */}
                        <Image
                                src={Partner3} // Substitua com o caminho real da imagem
                                alt="parceiro 3"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                    </div>
                </div>
            </div>
        </section>
    );
}
