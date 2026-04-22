export default function GradientButton({ children }) {
  return (
    <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 transition">
      {children}
    </button>
  );
}