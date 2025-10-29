import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        question: '¿Cuál es el principal elemento en la prevención de accidentes viales?',
        options: ['La unidad', 'El supervisor', 'El conductor', 'Las condiciones del camino'],
        correctAnswer: 'El conductor',
    },
    {
        question: 'Según la "Regla de los 3 puntos", ¿cómo se debe subir o bajar de la unidad?',
        options: [
            'Con una mano y un pie',
            'Saltando para ahorrar tiempo',
            'Siempre manteniendo 3 puntos de contacto (2 manos y 1 pie, o 1 mano y 2 pies)',
            'Usando solo las manos'
        ],
        correctAnswer: 'Siempre manteniendo 3 puntos de contacto (2 manos y 1 pie, o 1 mano y 2 pies)',
    },
    {
        question: '¿Cuál es el límite de velocidad permitido por CEMEX en general?',
        options: ['100 km/hr', '90 km/hr', '80 km/hr', '110 km/hr'],
        correctAnswer: '80 km/hr',
    },
    {
        question: '¿Qué es un "Acto inseguro"?',
        options: [
            'Una falla mecánica en el camión',
            'Una acción del trabajador que viola un procedimiento de seguridad',
            'Malas condiciones climáticas',
            'Un camino en mal estado'
        ],
        correctAnswer: 'Una acción del trabajador que viola un procedimiento de seguridad',
    },
    {
        question: 'El uso de casco, lentes y zapatos de seguridad son parte del:',
        options: ['Procedimiento de carga', 'Equipo de Protección Personal (EPP)', 'Checklist de la unidad', 'Kit de emergencia'],
        correctAnswer: 'Equipo de Protección Personal (EPP)',
    },
    {
        question: '¿Cuál es la distancia de seguimiento recomendada para mantener con el vehículo de enfrente?',
        options: ['1 segundo', 'La longitud de un camión', 'La regla de los 4 segundos', 'La regla de los 10 segundos'],
        correctAnswer: 'La regla de los 4 segundos',
    },
    {
        question: '¿Qué se debe hacer si se detecta una "Condición insegura"?',
        options: [
            'Continuar trabajando con más cuidado',
            'Ignorarla si no parece muy peligrosa',
            'Reportarla de inmediato al supervisor o responsable',
            'Intentar arreglarla uno mismo'
        ],
        correctAnswer: 'Reportarla de inmediato al supervisor o responsable',
    },
    {
        question: '¿Está permitido el uso del celular mientras se conduce?',
        options: [
            'Sí, si es una llamada importante',
            'Solo para ver el mapa',
            'No, está estrictamente prohibido',
            'Sí, con el manos libres'
        ],
        correctAnswer: 'No, está estrictamente prohibido',
    },
    {
        question: 'El principio de "Bloqueo y Candadeo" se aplica para:',
        options: [
            'Asegurar la carga',
            'Evitar que la unidad se mueva durante la carga, descarga o mantenimiento',
            'Cerrar la cabina al estacionarse',
            'Bloquear el GPS'
        ],
        correctAnswer: 'Evitar que la unidad se mueva durante la carga, descarga o mantenimiento',
    },
     {
        question: '¿Qué significa "Manejo Defensivo"?',
        options: [
            'Conducir siempre por el carril derecho',
            'Anticiparse y pensar por los demás para evitar accidentes',
            'Conducir a baja velocidad todo el tiempo',
            'Frenar bruscamente ante cualquier peligro'
        ],
        correctAnswer: 'Anticiparse y pensar por los demás para evitar accidentes',
    }
];
