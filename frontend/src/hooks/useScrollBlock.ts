import { useCallback, useEffect } from "react";

/**
 *
 * @returns [disableScroll] - disables/enables scroll functionality
 */
export default function useScrollBlock(): [(disable: boolean) => void] {
  const blockScroll = useCallback((disableScroll: boolean) => {
    const body: HTMLElement = document.body;
    if (!body) throw new Error("body element was not found");

    if (disableScroll) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  }, []);

  useEffect(() => {
    blockScroll(false);

    return () => blockScroll(false);
  }, [blockScroll]);

  return [blockScroll];
}
