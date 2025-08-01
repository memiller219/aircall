export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <nav>
        <div className="px-[190px]">
          <div className="grid grid-cols-[repeat(12,70px)] gap-[20px]"></div>
        </div>
      </nav>
      <main className="flex-1 px-[190px]">
        <div className="grid grid-cols-[repeat(12,70px)] gap-[20px] w-[1120px]">
          {children}
        </div>
      </main>
    </div>
  );
}
