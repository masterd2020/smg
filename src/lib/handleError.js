import { toast } from 'react-toastify';

const handleError = (isError, error) => {
  if(isError) {
    if(error.status === 'FETCH_ERROR') {
      const notify = () => toast.error("Oops!!!, Something went wrong. Unable to fetch at the moment. Plase wait for a while and try again.");
      return notify()
    }
  }
}

export default handleError;