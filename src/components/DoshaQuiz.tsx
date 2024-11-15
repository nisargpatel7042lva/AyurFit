import { useState } from 'react';

export default function DoshaQuiz() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [result, setResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const questions = [
    {
      question: "How would you describe your body type?",
      options: [
        { answer: "Thin and light", dosha: "Vata" },
        { answer: "Medium and muscular", dosha: "Pitta" },
        { answer: "Heavy and solid", dosha: "Kapha" }
      ]
    },
    {
      question: "How would you describe your skin?",
      options: [
        { answer: "Dry and rough", dosha: "Vata" },
        { answer: "Warm and sensitive", dosha: "Pitta" },
        { answer: "Smooth and oily", dosha: "Kapha" }
      ]
    },
    {
      question: "How do you typically respond to stress?",
      options: [
        { answer: "I feel anxious or nervous", dosha: "Vata" },
        { answer: "I feel frustrated or angry", dosha: "Pitta" },
        { answer: "I stay calm and composed", dosha: "Kapha" }
      ]
    },
    {
      question: "What is your sleep pattern like?",
      options: [
        { answer: "Light sleeper, often wake up at night", dosha: "Vata" },
        { answer: "Moderate sleeper, but sleep soundly", dosha: "Pitta" },
        { answer: "Heavy sleeper, rarely wake up at night", dosha: "Kapha" }
      ]
    },
    {
      question: "How is your appetite?",
      options: [
        { answer: "Variable appetite, sometimes I forget to eat", dosha: "Vata" },
        { answer: "Strong appetite, I get irritable if I miss a meal", dosha: "Pitta" },
        { answer: "Steady appetite, I can easily wait for meals", dosha: "Kapha" }
      ]
    }
  ];

  const handleAnswer = (questionIndex: number, dosha: string) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: dosha
    }));
  };

  const calculateDosha = () => {
    if (Object.keys(answers).length !== questions.length) {
      setErrorMessage("Please answer all the questions before submitting.");
      return;
    }

    const doshaCount = { Vata: 0, Pitta: 0, Kapha: 0 };
    Object.values(answers).forEach(dosha => {
      doshaCount[dosha as keyof typeof doshaCount]++;
    });

    const maxDosha = (Object.keys(doshaCount) as Array<keyof typeof doshaCount>).reduce((a, b) =>
      doshaCount[a] > doshaCount[b] ? a : b
    );

    setResult(maxDosha);
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sage-50">
      <h2 className="text-3xl font-bold text-sage-900 mb-8">Find Your Dosha</h2>
      
      {!result ? (
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          {questions.map((q, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg font-semibold mb-3">{q.question}</p>
              <div className="space-y-2">
                {q.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(index, option.dosha)}
                    className={`w-full px-4 py-2 border rounded-md 
                    ${answers[index] === option.dosha ? 'bg-sage-200' : 'bg-sage-50'} 
                    hover:bg-sage-100 transition`}
                  >
                    {option.answer}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}

          <button
            onClick={calculateDosha}
            className="mt-6 w-full py-3 bg-sage-600 text-white font-semibold rounded-md hover:bg-sage-700 transition"
            disabled={Object.keys(answers).length !== questions.length}
          >
            Show My Dosha
          </button>
        </div>
      ) : (
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Your Dosha is: {result}</h3>
          <p className="text-sage-700">
            {result === "Vata" && "You are creative, quick-minded, and flexible."}
            {result === "Pitta" && "You are focused, ambitious, and intelligent."}
            {result === "Kapha" && "You are calm, strong, and loyal."}
          </p>
          <button
            onClick={() => setResult(null)}
            className="mt-6 px-6 py-2 bg-sage-600 text-white font-semibold rounded-md hover:bg-sage-700 transition"
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}
