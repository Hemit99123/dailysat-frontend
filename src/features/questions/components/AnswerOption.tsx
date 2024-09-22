import React from 'react';

interface AnswerOptionProps {
    label: string;
    text: string
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ label, text }) => {
  return (
    <div className="flex items-center space-x-1 cursor-pointer">
      <div className="rounded-full border border-gray-600 border-opacity-40 text-gray-600">
        <div className="flex h-6 w-6 items-center justify-center text-[12px]">{label}</div>
      </div>
      <p className="text-[15px]">{text}</p>
    </div>
  );
};

export default AnswerOption;
