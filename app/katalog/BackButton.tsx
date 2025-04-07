import React from 'react';

const BackButton: React.FC = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBack}
      className="fixed bottom-4 left-4 bg-black text-white p-3 rounded-full hover:bg-gray-700"
    >
      ⨉
    </button>
  );
};

export default BackButton;
