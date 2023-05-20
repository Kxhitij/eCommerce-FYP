import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  return (
    <Spinner animation='border' reole=' status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
}
