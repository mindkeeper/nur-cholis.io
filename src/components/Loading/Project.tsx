export default function Project() {
  return (
    <div className="my-2 transition bg-secondary md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-110">
      <div className="p-10 flex flex-col gap-4">
        <div className="bg-grey w-1/3 h-4 animate-pulse"></div>
        <div className="bg-grey w-full h-4 animate-pulse"></div>
        <div className="bg-grey w-full h-4 animate-pulse"></div>
        <div className="bg-grey w-1/4 h-4 animate-pulse"></div>
      </div>
    </div>
  );
}
