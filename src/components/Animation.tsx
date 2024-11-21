import { useState } from "react";
import { Bell } from "lucide-react";

const AnimatedBellButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle the button click to trigger animation
  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Time matches animation duration
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow ${
        isAnimating ? "ring-animation" : ""
      }`}
    >
      <Bell className="w-5 h-5 text-gray-600" />
    </button>
  );
};

export default AnimatedBellButton;
