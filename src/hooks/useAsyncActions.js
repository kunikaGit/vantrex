import { useState } from "react";

export const useAsyncAction = () => {
  const [loading, setLoading] = useState(false);

  // Wrap any function with loading state
  const runWithLoading = async (fn) => {
    try {
      setLoading(true);
      await fn();             // run your callback
    } finally {
      setLoading(false);
    }
  };

  return { loading, runWithLoading };
};
