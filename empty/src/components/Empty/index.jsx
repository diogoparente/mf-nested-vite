import { useEffect } from "react";

function __federation_method_setRemote({ remoteName, remoteConfig }) {
  window.remotesMap[remoteName] = remoteConfig;
}

function Empty() {
  useEffect(() => {
    window.__federation_method_setRemote = __federation_method_setRemote;
    console.log(window.__federation_method_setRemote);
  }, []);

  return <>Emptiness</>;
}

export default Empty;
