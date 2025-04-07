interface StatsCardProps {
    icon: string;
    title: string;
    value: string;
  }
  
  export function StatsCard({ icon, title, value }: StatsCardProps) {
    return (
      <article className="flex items-center p-5 rounded-2xl border-solid border-[3px] border-black border-opacity-20 w-[536px] max-md:w-full max-sm:p-4">
        <div className="flex justify-center items-center mr-10 h-[30px] w-[30px] max-sm:mr-5">
          <i className={`ti ${icon}`} />
        </div>
        <div className="flex-1">
          <h2 className="mb-2.5 text-2xl font-semibold max-sm:text-lg">
            {title}
          </h2>
          <p className="text-3xl italic opacity-[0.78] max-sm:text-2xl">
            {value}
          </p>
        </div>
      </article>
    );
  }
  