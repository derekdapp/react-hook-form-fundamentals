import { useRef } from "react";

const useRenderCount = () => {
  const count = useRef(0);
  count.current += 1;
  return Math.ceil(count.current / 2);
};

export default useRenderCount;
