import { useState } from "react";

const ReactButton: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="rounded-lg
      border border-transparent
      px-4 py-2
      text-base font-medium font-inherit
    bg-gray-50
      cursor-pointer
      transition-colors duration-200
      hover:border-indigo-500
      focus:outline-[4px] focus:outline-auto focus:outline-webkit-focus-ring-color
      dark:bg-[#1a1a1a]"
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </button>
  );
};

export default ReactButton;
