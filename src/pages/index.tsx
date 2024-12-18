import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/guide", { replace: true });
  }, []);

  return null;
};

export default Page;
