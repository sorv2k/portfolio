import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ isVisible, onComplete }) => {
  const [showName, setShowName] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullName = 'Sourav Guruprasad';

  useEffect(() => {
    if (isVisible) {
      setShowName(true);
      setTypedText('');
      
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex < fullName.length) {
          setTypedText(fullName.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          // Dismiss immediately when typing completes
          setShowName(false);
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      }, 60);

      return () => clearInterval(typingInterval);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-dark-bg flex items-center justify-center"
        >
          <AnimatePresence>
            {showName && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="text-center"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  {typedText}
                  <span className="cursor-blink text-accent">|</span>
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
      <style jsx>{`
        .cursor-blink {
          animation: blink 500ms infinite;
        }
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default LoadingScreen;