// hooks/useRouteLoader.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * useRouteLoader({ delay, waitForImages })
 * - delay: ms to show loader (when not waiting for images)
 * - waitForImages: if true, the loader hides only after images on the new page load
 */
export default function useRouteLoader({
  delay = 800,
  waitForImages = false,
} = {}) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let mounted = true;
    setLoading(true); // show loader on every route change

    const hide = () => {
      if (mounted) setLoading(false);
    };

    if (!waitForImages) {
      const t = setTimeout(hide, delay);
      return () => {
        mounted = false;
        clearTimeout(t);
      };
    }

    // waitForImages = true path
    const imgs = Array.from(document.images || []);
    if (imgs.length === 0) {
      // no images -> hide quickly
      const t = setTimeout(hide, 120);
      return () => {
        mounted = false;
        clearTimeout(t);
      };
    }

    let cancelled = false;
    const watchers = imgs.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((res) => {
            const onDone = () => {
              img.removeEventListener("load", onDone);
              img.removeEventListener("error", onDone);
              res();
            };
            img.addEventListener("load", onDone);
            img.addEventListener("error", onDone);
          })
    );

    Promise.all(watchers)
      .then(() => {
        if (!cancelled && mounted) setTimeout(hide, 120);
      })
      .catch(() => {
        if (!cancelled && mounted) hide();
      });

    return () => {
      cancelled = true;
      mounted = false;
    };
  }, [location, delay, waitForImages]);

  return loading;
}
