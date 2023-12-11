import Image from "next/image";
import InputForm from "@/components/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
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
        <button type="submit" className="btn-primary py-2 text-white">
          Login
        </button>
        <div className="flex justify-between gap-1">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember" className="text-caption">
            Remember Me
          </label>
          <a href="" className="text-caption text-right grow">
            Forgot your password?
          </a>
        </div>
      </form>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t dark:border-gray-950 border-gray-300"></div>
        <span className="flex-shrink mx-4 text-caption text-white">OR</span>
        <div className="flex-grow border-t dark:border-gray-950 border-gray-300"></div>
      </div>
      <div className="flex justify-center px-4 py-2 gap-4 ">
        <button className="btn-gray py-2 px-6 flex gap-2 items-center font-normal">
          {" "}
          <FontAwesomeIcon icon={faGoogle} className="text-white" width={20} />
          <span> Google</span>
        </button>
        <button className="btn-gray py-2 px-6 flex gap-2 items-center font-normal">
          {" "}
          <FontAwesomeIcon icon={faGithub} className="text-white" width={20} />
          <span>GitHub</span>
        </button>
      </div>
      <p className="text-caption pt-5 pb-16 text-center">Don&apos;t have an account? Sign up for free</p>
    </div>
  );
};

export default page;
