import { useEffect, useState } from "react";
import { BASE_URL } from "@/config";
import styles from "./styles.module.css";

export default function BackendWakeUpBanner() {
  const [isWakingUp, setIsWakingUp] = useState(false);

  useEffect(() => {
    let interval = null;

    const checkBackend = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        const res = await fetch(`${BASE_URL}/health`, {
          signal: controller.signal,
        });
        clearTimeout(timeout);

        if (res.ok) {
          setIsWakingUp(false);
          clearInterval(interval);
        }
      } catch {
        setIsWakingUp(true);
      }
    };

    checkBackend();

    interval = setInterval(checkBackend, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isWakingUp) return null;

  return (
    <div className={styles.banner} role="status" aria-live="polite">
      <span className={styles.dot} />
      <span className={styles.text}>
        Waking up backend, please wait a moment…
      </span>
    </div>
  );
}
