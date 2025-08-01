
export default function Layout({ children }) {
  return (
    <div className=" max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col">
      {children}
    </div>
  );
}
