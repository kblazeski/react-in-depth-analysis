import { useRef } from 'react';

export const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Focus input
      </button>
      <input ref={inputRef} />
    </>
  );
};








