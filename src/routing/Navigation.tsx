import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div
      style={{
        height: '100px',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <NavLink style={{ paddingRight: '12px' }} to={'/class-based/users'}>
        Class based Users
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/functional/users'}>
        Functional Users
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/jsxshowcase'}>
        Jsx Showcase
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/managing-state/users'}>
        Managing State
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/rendering'}>
        Rendering
      </NavLink>
    </div>
  );
};
