import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";

const LoadingContext = createContext({ isLoading: false });

export const LoadingProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const countRef = useRef(0);
  const timerRef = useRef(null);

  const showWithDelay = () => {
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => setVisible(true), 200); // delay to avoid flicker
    }
  };

  const hideNow = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    // small grace to smooth out rapid sequences
    setTimeout(() => setVisible(false), 120);
  };

  useEffect(() => {
    const reqId = axios.interceptors.request.use(
      (config) => {
        countRef.current += 1;
        showWithDelay();
        return config;
      },
      (error) => {
        countRef.current = Math.max(0, countRef.current - 1);
        if (countRef.current === 0) hideNow();
        return Promise.reject(error);
      }
    );

    const resId = axios.interceptors.response.use(
      (response) => {
        countRef.current = Math.max(0, countRef.current - 1);
        if (countRef.current === 0) hideNow();
        return response;
      },
      (error) => {
        countRef.current = Math.max(0, countRef.current - 1);
        if (countRef.current === 0) hideNow();
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(reqId);
      axios.interceptors.response.eject(resId);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const value = useMemo(() => ({ isLoading: visible }), [visible]);

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
