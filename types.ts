export enum Section {
    Cursos = 'cursos',
    Verificaciones = 'verificaciones',
    Control = 'control',
}

export interface Initiative {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
    points: string[];
}

export interface OperatorRecord {
    id: string;
    name: string;
    transportista: string;
}

export interface RegisteredOperator extends OperatorRecord {
    photo: string; // base64 data URL
    timestamp: number;
}

export enum ControlTab {
    Registro = 'registro',
    Asistentes = 'asistentes',
    Verificacion = 'verificacion',
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}
