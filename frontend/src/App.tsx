import { useEffect } from "react";
import { Router } from "./router";
import { useAuthStore } from "./store/AuthStore";

function App() {
  const initialize = useAuthStore((store) => store.initialize);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
