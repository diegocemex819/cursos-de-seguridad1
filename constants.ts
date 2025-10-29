
import { Initiative } from './types';

export const CURSOS_INITIATIVES: Initiative[] = [
    {
        id: 1,
        icon: '👤',
        title: '1. Autenticación Biométrica',
        subtitle: 'Prueba de identidad irrefutable:',
        points: [
            '<strong>Registro Inicial y Final:</strong> Escaneo facial o dactilar al inicio y fin de cada sesión, cotejado con la identidad registrada.',
            '<strong>Controles Aleatorios (Proof of Presence):</strong> Solicitud de autenticación al azar durante el curso (ej. "selfie" validada). No responder en 60s se marca como inasistencia.',
            '<strong>Herramienta:</strong> App móvil o quiosco con cámara en el aula.',
        ],
    },
    {
        id: 2,
        icon: '📍',
        title: '2. Geocercado (Geofencing)',
        subtitle: 'Confirmación de ubicación física:',
        points: [
            '<strong>Requisito de Conexión:</strong> Exigir activación de GPS en el dispositivo del operador para validar su ubicación dentro de la geocerca del centro de capacitación.',
            '<strong>Exclusión por Ausencia:</strong> Si el sistema detecta ausencia del perímetro por más del 5% del tiempo total del curso, se anula la elegibilidad para la certificación.',
        ],
    },
    {
        id: 3,
        icon: '❓',
        title: '3. Interacción Activa',
        subtitle: 'Garantía de atención activa:',
        points: [
            '<strong>Cuestionarios Sorpresa:</strong> Mini-evaluaciones de 2-3 preguntas integradas en la presentación, que deben ser respondidas de inmediato en la plataforma.',
            '<strong>Token de Sesión Único:</strong> El instructor genera un código alfanumérico al inicio, que el operador debe introducir para validar su asistencia del día.',
        ],
    },
];

export const VERIFICACIONES_INITIATIVES: Initiative[] = [
    {
        id: 4,
        icon: '📱',
        title: '4. Etiquetado Único (RFID/QR)',
        subtitle: 'Asignación de identidad digital única:',
        points: [
            '<strong>Identificación Inviolable:</strong> Etiqueta RFID o QR de alta seguridad adherida de forma permanente al chasis o parabrisas de la unidad.',
            '<strong>Lectura Obligatoria al Acceso:</strong> Escaneo obligatorio al entrar al centro, registrando hora e ID en la base de datos central para poder iniciar el proceso.',
        ],
    },
    {
        id: 5,
        icon: '📸',
        title: '5. Evidencia Fotográfica',
        subtitle: 'Pruebas georreferenciadas con sello de tiempo:',
        points: [
            '<strong>Cámara de Aplicación:</strong> El inspector usa una app (no la cámara nativa) que incrusta automáticamente en las fotos: coordenadas GPS, fecha/hora de servidor, e ID de la unidad.',
            '<strong>Carga Inmediata:</strong> Las fotos y datos se cargan al instante al servidor central. Sin carga, el informe no puede finalizarse.',
        ],
    },
    {
        id: 6,
        icon: '🔗',
        title: '6. Integración de Sistemas',
        subtitle: 'Eliminación de discrecionalidad:',
        points: [
            '<strong>Registro Cero:</strong> El inspector solo puede iniciar el formulario después de que el escaneo (Inic. 4) y las fotos (Inic. 5) confirmen la presencia de la unidad.',
            '<strong>Fallo Automático por Ausencia:</strong> Si la unidad no realiza el escaneo de entrada en la ventana de la cita, el sistema la marca como "Ausente" automáticamente.',
        ],
    },
];
