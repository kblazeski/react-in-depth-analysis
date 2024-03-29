import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div
      style={{
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
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
      <NavLink style={{ paddingRight: '12px' }} to={'/effects/use-effect'}>
        Use Effect
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/effects/effect-throttled'}>
        Use Effect Throttled
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/effects/layout-effect-throttled'}>
        Use Layout Effect Throttled
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/effects/throttled-combined'}>
        Effects Throttled Combined
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/use-ref'}>
        Use Ref
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/custom-hook'}>
        Custom hook
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/non-optimized-users'}>
        Non optimized users
      </NavLink>
      <NavLink style={{ paddingRight: '12px' }} to={'/optimized-users'}>
        Optimized users
      </NavLink>
    </div>
  );
};
