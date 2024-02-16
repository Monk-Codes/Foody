import { useCallback, useEffect, useState } from "react";

async function sendHttpReq(url, config) {
 const response = await fetch(url, config);
 const resData = await response.json();
 if (!response.ok) {
  throw new Error(resData.message || "Something went wrong");
 }
 return resData;
}
////////////////////////
export default function useHttp(url, config, initialData) {
 const [isLoad, setLoad] = useState(false);
 const [data, setData] = useState(initialData);
 const [error, setError] = useState();

 function clearData() {
  setData(initialData);
 }
 /////////////////////
 const sendReq = useCallback(
  async function sendReq(data) {
   setLoad(true);
   try {
    const resData = await sendHttpReq(url, { ...config, body: data });
    setData(resData);
   } catch (error) {
    setError(error.message);
   }
   setLoad(false);
  },
  [url, config]
 );
 /////////////////
 useEffect(() => {
  if ((config && (config.method === "GET" || !config.method)) || !config) {
   sendReq();
  }
 }, [sendReq, config]);
 ////////////////
 return {
  data,
  isLoad,
  error,
  sendReq,
  clearData,
 };
}
