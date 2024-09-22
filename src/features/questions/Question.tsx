import AnswerOption from './components/AnswerOption';

const Question = () => {
  return (
    <div className="flex flex-col items-start px-8">
      <p className="mb-5 text-lg">What forms the border between the middle and inner ear?</p>
      <span className="mb-3 text-sm font-semibold">Choose 1 answer:</span>
      <div className="w-full space-y-2">
        <AnswerOption label="A" text="Tympanic Membrane" />
        <hr className="my-5 h-px border-0 bg-gray-200" />
        <AnswerOption label="B" text="Oval Window" />
        <hr className="my-5 h-px border-0 bg-gray-200" />
        <AnswerOption label="C" text="Round Window" />
        <hr className="my-5 h-px border-0 bg-gray-200" />
        <AnswerOption label="D" text="Stapes" />
      </div>
    </div>
  );
};

export default Question;
