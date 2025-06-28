import React from 'react';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import { questConfig } from './config/questConfig';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Analytics from './components/Analytics';
import MediaSection from './components/MediaSection';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FeedbackButton from './components/FeedbackButton';

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <AuthProvider>
        <div className="min-h-screen bg-[#5EA7A7]">
          <Header />
          <Hero />
          <Features />
          <Stats />
          <Analytics />
          <MediaSection />
          <Testimonials />
          <CTA />
          <Footer />
          
          {/* Global Feedback Button - Available on all pages */}
          <FeedbackButton />
        </div>
      </AuthProvider>
    </QuestProvider>
  );
}

export default App;