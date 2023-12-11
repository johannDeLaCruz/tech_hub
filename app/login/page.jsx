import Image from "next/image";
import InputForm from "@/components/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
const page = () => {
  return (
    <div className="container">
      <div className="py-12">
        <div className="mx-auto relative rounded-full w-32 aspect-square overflow-hidden">
          <Image
            src="https://picsum.photos/1200/600"
            alt="avatar"
            fill={true}
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-heading text-h2">Welcome Back!</h1>
        <p className="text-body1">Login to access your favourite AI tools!</p>
      </div>
      <form action="POST" className="flex flex-col py-4 gap-2">
        <div className="flex flex-center gap-4">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white"
            width={24}
          />
          <InputForm
            type={"text"}
            placeholder={"Email"}
            name={"email"}
            id={"email"}
          />
        </div>
        <div className="flex flex-center gap-4">
          <FontAwesomeIcon icon={faLock} className="text-white" width={24} />
          <InputForm
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            id={"password"}
          />
        </div>
        <button type="submit" className="btn-primary py-2 text-white grow">
          Login
        </button>
        <div>
          <label htmlFor="remember" className="text-caption">
            Remember Me
          </label>
          <input type="checkbox" name="remember" id="remember" />
        </div>
      </form>
    </div>
  );
};

export default page;
