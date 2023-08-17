// import { lazy, useState, useEffect } from "react";
import { useEffect, useState } from "react";
import Empty from "sbhEmpty/Empty";

const module = {
  remoteUrl: "http://localhost:5001",
  component: "remoteApp",
  module: "App",
};

const empty = Empty;

const Remote = () => {
  const [RemoteComponent, setRemoteComponent] = useState();
  useEffect(() => {
    const getRemote = async () => {
      // @ts-ignore
      console.log(JSON.stringify(window.remotesMap, null, 4));
      window.remotesMap = {};
      window.remotesMap[module.component] = {
        url: module.remoteUrl,
        format: "esm",
        from: "vite",
      };

      // @ts-ignore
      const loadedComponent = await __federation_method_getRemote(
        module.component,
        `./${module.module}`
      );
      const Component = loadedComponent.default;

      console.log({ Component });
      setRemoteComponent(<Component />);
    };

    getRemote();
  }, []);

  return RemoteComponent ? <RemoteComponent /> : <Empty />;
};

export default Remote;
