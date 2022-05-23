import { toast } from 'react-toastify';

const handleError = (isError, error) => {
  if(isError) {
    if(error.status === 'FETCH_ERROR') {
      const notify = () => toast.error("Oops!!!, Something went wrong. Unable to fetch at the moment. Plase wait for a while and try again.");
      return notify()
    }
    if(error.error === 'BODY_NOT_VALID') {
      for (let err in error.data) {
        const notify = () => toast.error(error.data[err]);
        return notify()
      }
    }
  }
}

export default handleError;