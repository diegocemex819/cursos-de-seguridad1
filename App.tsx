import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CursosSection from './components/CursosSection';
import VerificacionesSection from './components/VerificacionesSection';
import ControlPanel from './components/ControlPanel';
import Footer from './components/Footer';
import { Section } from './types';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Section>(Section.Cursos);

    return (
        <div className="container mx-auto max-w-6xl p-4 sm:p-8">
            <Header />
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            <main>
                {activeSection === Section.Cursos && <CursosSection />}
                {activeSection === Section.Verificaciones && <VerificacionesSection />}
                {activeSection === Section.Control && <ControlPanel />}
            </main>
            <Footer />
        </div>
    );
};

export default App;
