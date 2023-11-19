import React from 'react';
import { ReactElement } from 'react';

export const JsxShowCase = (): ReactElement => {
  const jsxElement = <div>This is JSX element</div>;
  const jsxElementWithCreateElement = React.createElement('div', null, 'This is JSX element');
  console.log(jsxElement);
  return (
    <>
      {jsxElement}
      {jsxElementWithCreateElement}
    </>
  );
};
