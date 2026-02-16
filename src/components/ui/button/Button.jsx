import './button.scss';

export default function Button({ children }) {
  return <button className="btn" type='button'>{children}</button>;
}
