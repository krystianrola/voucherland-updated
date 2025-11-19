/**
 * @deprecated
 *
 * TO BE DONE LATER
 */

const SkeletonStrip = () => {
  return (
    <div className="w-[17rem] flex flex-col gap-2 p-2 rounded-md border border-solid border-block">
      <div className="animate-pulse w-full h-[10rem] rounded-md bg-block" />
      <div className="flex flex-col gap-2">
        <div className="animate-pulse w-1/2 h-4 rounded-md bg-block" />
        <div className="animate-pulse w-4/5 h-4 rounded-md bg-block" />

        <div className="animate-pulse w-full h-9 rounded-md bg-block" />
      </div>
    </div>
  );
};

export { SkeletonStrip };
