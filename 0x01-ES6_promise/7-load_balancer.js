export default function loadBalancer(chinaDownLoad, USDownload) {
  return Promise.race([chinaDownLoad, USDownload])
    .then((results) => (
      results
    ))
    .catch((error) => ({
      status: 'rejected',
      Error: `Error: ${error.message}`,
    }));
}
