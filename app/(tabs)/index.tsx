import { useContext, useEffect, useState } from "react";
import { ScrollView, Separator, Spinner } from "tamagui";

import { MySafeAreaView } from "../../components/MySafeAreaView";
import { MyStack } from "../../components/MyStack";
import TimelinePosts from "../../components/TimelinePosts";
import { TimelineContext } from "../../context/TimelineContext";

export default function Tab1() {
  const timeline = useContext(TimelineContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (timeline.length > 0) {
      setLoading(false);
    }
  }, [timeline]);

  return (
    <MySafeAreaView>
      <ScrollView>
        <MyStack separator={<Separator />}>
          {loading ? (
            <Spinner />
          ) : (
            timeline.map((timelinePost) => (
              <TimelinePosts
                key={timelinePost.id}
                timelinePost={timelinePost}
              />
            ))
          )}
        </MyStack>
      </ScrollView>
    </MySafeAreaView>
  );
}
