import { createContext, useEffect, useState } from "react";

import { Posts } from "../types/timeline";
import { generateTimeline } from "../utils/generateData";

export const TimelineContext = createContext<Posts[]>([]);

export const TimelineProvdier = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  const [timeline, setTimeline] = useState<Posts[]>([]);

  useEffect(() => {
    setTimeline(generateTimeline());
  }, []);

  return (
    <TimelineContext.Provider value={timeline}>
      {children}
    </TimelineContext.Provider>
  );
};
