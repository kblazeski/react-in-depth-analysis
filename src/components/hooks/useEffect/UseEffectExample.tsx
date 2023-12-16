import { useEffect, useState } from 'react';

export const UseEffectExample = () => {
  const [quotes, setQuotes] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`https://api.quotable.io/quotes/random`).then(async (result) => {
        const resultJson = result.json();
        const apiQuotes = await resultJson;

        if (apiQuotes.length > 0) {
          const firstQuote = apiQuotes[0];

          const authorAndQuote = `${firstQuote.author} - "${firstQuote.content}"`;
          setQuotes((ps) => [...ps, authorAndQuote]);
        }
      });

      return () => {
        clearInterval(interval);
      };
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {quotes.map((quote) => {
        return <div>{quote}</div>;
      })}
    </>
  );
};
