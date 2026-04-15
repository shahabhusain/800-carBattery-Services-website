'use client';

import React, { useEffect } from 'react';
import { HiOutlineX } from 'react-icons/hi';

const Modal = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 backdrop-blur-2xl bg-black/70 backdrop-blur-sm z-[3000] transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
        <div 
          className="relative w-full max-w-md bg-transparent rounded-2xl shadow-2xl transition-all duration-300 animate-in fade-in zoom-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-300 p-2"
            aria-label="Close modal"
          >
            <HiOutlineX size={28} />
          </button>
          
          {/* Modal content */}
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;